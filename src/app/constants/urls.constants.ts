// export const BASE_URL = "/todo/"
//"https://guacnbean.com/todo/";

interface URL {
	readonly [key: string]: string;
}

const BASE_URL = "/todo";
export const Endpoint: URL = {
	BIRTHDAY: BASE_URL + "/birthdays",
	CALENDAR: BASE_URL + "/ccal",
	MEETING: BASE_URL + "/meetings",
	SETTINGS: BASE_URL + "/settings",
}