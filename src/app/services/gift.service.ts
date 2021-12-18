import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Gift, GiftAction } from "../interfaces/event/gift.interface";
import { ResponseStatus } from "../interfaces/response.interface";
import { GiftUtils } from "../utils/gift.utils";

@Injectable({
	providedIn: "root"
})
export class GiftService {
	private headers = new HttpHeaders().set("Content-Type", "application/json");

	constructor(private http: HttpClient) {}

	public postGift(gift: Gift, showDialog = true, action = GiftAction.Add): Observable<ResponseStatus> {
		console.info("🎁 🏁 GiftService ---> postGift, gift: ", gift);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return this.http.post<Response>(
			GiftUtils.giftURLForAction(action),
			GiftUtils.formatGift(gift),
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
}