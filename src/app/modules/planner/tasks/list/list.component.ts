import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { take, takeUntil } from "rxjs/operators";

import { Event } from "../../../../constants/events.contants";
import { Icon } from "../../../../constants/icons.constants";
import { Recurrence, Status } from "../../../../constants/tasks.constants";

import { ConfirmDialogAction, DialogAction, DialogPage } from "../../../../interfaces/dialog.interface";
import { Task } from "../../../../interfaces/event/task.interface";
import { HeaderLevel } from "../../../../interfaces/header.interface";
import { NO_ITEMS_CONFIG } from "../../../../interfaces/no-items.interface";
import { ResponseStatus } from "../../../../interfaces/response.interface";

import { DialogService } from "../../../../services/dialog.service";
import { EditService } from "../../../../services/edit.service";
import { TaskService } from "../../../../services/task.service";

@Component({
	selector: 'planner-tasks-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent {
	@Input() set list(list: Task[]) {
		this.fullList = list;
		this.tasksList$.next(list);
	}

	@Output() deletedTask = new EventEmitter();

	public headerLevel = HeaderLevel;
	public icon = Icon;
	public noItemsConfig = NO_ITEMS_CONFIG[Event.Task];

	private tasksList$ = new Subject<Task[]>();
	public list$ = this.tasksList$.asObservable();

	private filters = {
		recurrence: null,
		status: null
	}
	private fullList: Task[];
	private ngUnsubscribe$ = new Subject<void>();

	constructor(
		private dialogService: DialogService,
		private editService: EditService,
		private taskService: TaskService,
		private router: Router,
	) { }

	public filterList(recurrence: Recurrence[], status: Status): void {
		if (recurrence) {
			this.filters.recurrence = recurrence;
		}
		if (status) {
			this.filters.status = status;
		}

		let filteredList = this.fullList;
		if (this.filters.recurrence) {
			this.filters.recurrence = recurrence;

			const recsToCheck = Object.keys(recurrence).filter(
				(recurrence: Recurrence) => recurrence[recurrence]
			);

			filteredList = filteredList.filter((task: Task) => {
				let matchesFilter = false;
				console.log("Task: ", task, recsToCheck);
				recsToCheck.forEach((recurrence: Recurrence) => {
					if (task.recurrence[recurrence]) {
						matchesFilter = true;
					}
				});
				return matchesFilter;
			});
		}

		if (this.filters.status) {
			// TODO: add the status filter
		}

		this.tasksList$.next(filteredList);
	}

	public resetTasksFilters(): void {
		this.filters.recurrence = null;
		this.filters.status = null;
		this.tasksList$.next(this.fullList);
	}

	public onDeleteClicked(uuid: string): void {
		this.dialogService.showConfirmDialog(ConfirmDialogAction.Delete, DialogPage.Tasks)
			.pipe(
				takeUntil(this.ngUnsubscribe$)
			)
			.subscribe((action: ConfirmDialogAction) => {
				switch (action) {
					case ConfirmDialogAction.Continue:
						this.deleteTask(uuid);
						break;
					default:
						break;
				}
			});
	}

	public deleteTask(uuid: string): void {
		this.taskService.deleteTask(uuid)
			.pipe(
				take(1),
				takeUntil(this.ngUnsubscribe$)
			)
			.subscribe((response: ResponseStatus) => {
				this.dialogService.showResponseStatusDialog(response, DialogAction.Delete, DialogPage.Tasks);

				if (response === ResponseStatus.SUCCESS) {
					this.deletedTask.emit(null);
				}
			});
	}

	public editTask(task: Task): void {
		this.editService.editTask(task);
		this.router.navigate(["/events/edit-task"], {
			queryParams: { title: 'Edit Task' }
		});
	}

	public ngOnDestroy(): void {
		this.ngUnsubscribe$.next();
		this.ngUnsubscribe$.complete();
	}
}