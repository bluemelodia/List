import { SelectedDay } from "../calendar/calendar-response.types";
import { BirthdayID } from "../event.types";

export interface Birthday {
	name: string;
	date: SelectedDay;
	options: BirthdayOptions;
}

/**
* Format of birthday to send to the service.
*/
export interface AddBirthday {
	id: string;
	uuid: string;
	cmonth: number;
	month: number;
	cdate: number;
	date: number;
	year: number;
	name: string;
	call: number;
	text: number;
	gift: number;
	leap: number;
	cmonthname: string;
	lunar: number;
}

export interface BirthdayOptions {
	lunar: boolean;
	[BirthdayID.call]: boolean;
	[BirthdayID.text]: boolean;
	[BirthdayID.gift]: boolean;
}