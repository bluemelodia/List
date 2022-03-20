import { Component, Input } from "@angular/core";

import { Topic } from "../../../constants/topics.constants";
import { CalendarSchedule } from "../../../interfaces/calendar/calendar-response.interface";
import { NavService } from '../../../services/nav.service';

@Component({
	selector: "ml-calendar-schedule",
	templateUrl: "./calendar-schedule.component.html",
	styleUrls: ["./calendar-schedule.component.css"]
})
export class CalendarScheduleComponent {
	@Input() schedule: CalendarSchedule;

	public topic = Topic;

	constructor(
		private navService: NavService,
	) {}

	public navigate(topic: Topic): void {
		this.navService.navigateToTopic(topic);
	}
}