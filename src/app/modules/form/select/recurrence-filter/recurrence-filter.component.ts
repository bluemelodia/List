import {
	Component,
	ElementRef,
	EventEmitter,
	Output,
} from '@angular/core';

import { Recurrence, RecurrenceMap } from '../../../../constants/tasks.constants';

import { SelectComponent } from '../select.component';

import { FocusService } from '../../../../services/focus.service';

@Component({
	selector: 'app-recurrence-filter',
	templateUrl: './recurrence-filter.component.html',
	styleUrls: [
		"../select.component.css",
		'recurrence-filter.component.css'
	]
})
export class RecurrenceFilterComponent extends SelectComponent {
	@Output() onRecurrenceSelect = new EventEmitter<RecurrenceMap>();
	@Output() filterReset = new EventEmitter<void>();

	public recurrence = Recurrence;
	public recurrenceKeys = Object.keys(this.recurrence);
	public selected: RecurrenceMap = {};

	constructor(
		_element: ElementRef,
		_focus: FocusService
	) {
		super(_element, _focus);

		this.resetSelectionMap();
	}

	private resetSelectionMap() {
		Object.keys(this.recurrence).forEach((key: string) => {
			this.selected[key] = false;
		});
	}

	public clearFilter(): void {
		this.resetSelectionMap()
		this.filterReset.emit();
	}

	public hasSelectedOptions(): boolean {
		return Object.keys(this.recurrence).some((key: string) => this.selected[key]);
	}

	public selectOption(recurrence: Recurrence): void {
		this.showOptionList = false;
		this.selected[recurrence] = !this.selected[recurrence];
		this.onRecurrenceSelect.emit(this.selected);
	}

	public getSelectedOptions(): string {
		let selected = [];
		for (let recurrence of Object.keys(this.selected)) {
			if (this.selected[recurrence]) {
				selected.push(recurrence);
			}
		}

		return selected.join(", ");
	}
}
