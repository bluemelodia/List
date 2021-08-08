import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Dialog, DialogConfig, DialogType } from '../types/dialog/dialog.types';
import { ResponseStatus } from '../types/response.types';
import { DialogUtils } from '../utils/dialog.utils';

@Injectable({
	providedIn: 'root'
})
export class DialogService {
	private show$ = new Subject<DialogConfig>();
	private onClose$ = new Subject<void>();

	constructor() { }

	get showDialog$(): Observable<DialogConfig> {
		return this.show$.asObservable();
	}

	get onDialogClose$(): Observable<void> {
		return this.onClose$.asObservable();
	}

	showStatusDialog(status: ResponseStatus, dialogType: Dialog) {
		this.show$.next({
			title: DialogUtils.titleForDialog(status),
			message: DialogUtils.messageforDialog(status, dialogType),
			dialogType: DialogType.Info
		});
	}

	hideDialog() {
		this.show$.next(null);
		this.onClose$.next();
	}
}
