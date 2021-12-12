import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, } from "rxjs";
import { catchError, map } from "rxjs/operators";

import {
	Recipient,
	RecipientAction,
	RecipientList,
} from "../interfaces/event/recipient.interface";
import { Calendar, CalendarDay } from "../interfaces/calendar/calendar-response.interface";
import { Dialog } from "../interfaces/dialog.interface";
import { Response, ResponseStatus } from "../interfaces/response.interface";
import { AddRecipient } from "../interfaces/service/service-objects.interface";
import { RecipientUtils } from "../utils/recipient.utils";

// services
import { CalendarService } from "./calendar.service";
import { DialogService } from "./dialog.service";

@Injectable({
	providedIn: "root"
})
export class RecipientService {
	private calendar: Calendar;
	/** cache the recipient response, as it's used by multiple components */
	private birthdays: RecipientList;
	private headers = new HttpHeaders().set("Content-Type", "application/json");

	constructor(
		private calendarService: CalendarService,
		private dialogService: DialogService,
		private http: HttpClient
	) {
		this.setupSubscriptions();
	}

	private setupSubscriptions() {
		this.calendarService.onCalendarFetched$
			.subscribe((calendar: Calendar) => {
				if (!calendar) {
					throw new Error('Unable to fetch calendar.');
				}

				this.calendar = calendar;
			});
	}

	public modifyRecipient(recipient: Recipient, action: RecipientAction): Observable<ResponseStatus> {
		switch (action) {
			case RecipientAction.Add:
				return this.postRecipient(recipient);
			case RecipientAction.Edit:
				return this.postRecipient(recipient, true, RecipientAction.Edit);
		}
	}

	/*
	* TODO: add user ID
	*/
	public postRecipient(recipient: Recipient, showDialog = true, action = RecipientAction.Add): Observable<ResponseStatus> {
		console.info("🍰 🏁 RecipientService ---> postRecipient, recipient: ", recipient);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return this.http.post<Response>(
			RecipientUtils.recipientURLForAction(action),
			RecipientUtils.formatRecipient(recipient),
			{
				headers: this.headers
			}
		)
			.pipe(
				map((response: Response) => {
					return !response.statusCode ? ResponseStatus.SUCCESS : ResponseStatus.ERROR;
				}),
				catchError(() => {
					if (showDialog) {
						this.dialogService.showResponseStatusDialog(ResponseStatus.ERROR, RecipientUtils.recipientDialogForAction(action));
					}
					return of(null);
				})
			)
	}

	private patchRecipient(recipient: AddRecipient) {
		this.http.post<Response>(
			RecipientUtils.recipientURLForAction(RecipientAction.Edit),
			recipient,
			{
				headers: this.headers
			}
		)
			.subscribe();
	}

	public deleteRecipient(uuid: string): Observable<ResponseStatus> {
		console.info("🍰 🏁 RecipientService ---> deleteRecipient, delete recipient: ", uuid);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return this.http.delete<Response>(
			`${RecipientUtils.recipientURLForAction(RecipientAction.Delete)}/guest/${uuid}`,
			{
				headers: this.headers
			}
		)
			.pipe(
				map(() => {
					console.info("🍰 ✅ RecipientService ---> deleteRecipient success.");
					this.dialogService.showResponseStatusDialog(ResponseStatus.SUCCESS, Dialog.DeleteBirthday);
					return ResponseStatus.SUCCESS;
				}),
				catchError(() => {
					this.dialogService.showResponseStatusDialog(ResponseStatus.ERROR, Dialog.DeleteBirthday);
					return of(null);
				})
			)
	}

	/**
	 * @param userID 
	 * @returns A sorted list of birthdays for this user.
	 */
	public getRecipients(userID = "guest"): Observable<AddRecipient[]> {
		console.info("🍰 🏁 RecipientService ---> getRecipients, for id: ", userID);

		const getBirthday = `${RecipientUtils.recipientURLForAction(RecipientAction.Fetch)}/${userID}`;
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return this.http.get<Response>(
			getBirthday
		)
			.pipe(
				map((response: Response) => {
					console.info("🍰 ✅ RecipientService ---> getRecipients, received birthdays: ", response);
					this.birthdays = RecipientUtils.createRecipientLists(response.responseData);
					this.addSolarBirthdays(this.birthdays);
					return this.birthdays;
				}),
				catchError(() => {
					return of(null);
				})
			);
	}

	public addSolarBirthdays(birthdays: RecipientList): void {
		birthdays?.lunar?.forEach((recipient: AddRecipient) => {
			if (!recipient.futureDates || typeof recipient.futureDates !== 'object') {
				recipient.futureDates = {};
			}

			const matchingDays = this.calendar?.days?.filter((day: CalendarDay) => {
				return day.cmonthname === recipient.date.cmonthname
					&& day.cdate === recipient.date.cdate;
			});
			console.info("🍰 🏁 RecipientService ---> updateBirthdays, find matching days: ", recipient, matchingDays);

			let changes = true;
			matchingDays?.forEach((day: CalendarDay) => {
				if (day.year < this.calendarService.year) {
					delete recipient.futureDates[day.year];
					changes = true;
				} else if (!recipient.futureDates[day.year]) {
					recipient.futureDates[day.year] = day;
					changes = true;
				}
			});

			/** Silently propagate changes to the server. */
			if (changes) {
				console.log("🍰 🏁 RecipientService ---> patch recipient: ", recipient);
				this.patchRecipient(recipient);
			}
		});
	}
}
