import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Endpoint } from "../constants/urls.constants";
import { Settings } from "../interfaces/settings.interface";
import { Dialog } from "../types/dialog/dialog.types";
import { Response, ResponseStatus } from '../types/response.types';

import { DialogService } from "./dialog.service";

@Injectable({
	providedIn: 'root'
})
export class SettingsService {
	private baseURL = Endpoint.TODO;
	private saveSettingsURL = `${this.baseURL}/saveSettings`;
	private loadSettingsURL = `${this.baseURL}/loadSettings`;

	private headers = new HttpHeaders().set('Content-Type', 'application/json');

	constructor(
		private dialogService: DialogService,
		private http: HttpClient,
	) { }

	public loadSettings(userID = 'guest'): Observable<Settings> {
		console.info("🛠 ✅ SettingsService ---> loadSettings: ");
		return this.http.get<Response>(
			`${this.loadSettingsURL}/${userID}`
		)
			.pipe(
				map((response: Response) => {
					console.info("🛠 ✅ SettingsService ---> fetchSettings, received settings: ", response);
					return response.responseData;
				}),
				catchError(() => {
					return of(null);
				})
			);
	}

	public saveSettings(settings: Settings): Observable<void> {
		console.info("🛠 ✅ SettingsService ---> fsaveSettings: ", settings);
		return this.http.post<Response>(
			this.saveSettingsURL,
			this.formatSettings(settings),
			{
				headers: this.headers
			}
		)
			.pipe(
				map((response: Response) => {
					this.dialogService.showResponseStatusDialog(response.statusCode, Dialog.SaveSettings);
					return of(null);
				}),
				catchError(() => {
					this.dialogService.showResponseStatusDialog(ResponseStatus.ERROR, Dialog.SaveSettings);
					return of(null);
				})
			);
	}

	private formatSettings(settings: Settings): Settings {
		return {
			id: 'guest',
			...settings,
		}
	}
}