import { 
	ChangeDetectionStrategy,
	Component,
	HostBinding,
	OnInit,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";

import { CalendarType } from "./interfaces/calendar/calendar.interface";

import { CalendarService } from './services/calendar.service';
import { LoadingService } from "./services/loading.service";
import { NavService } from "./services/nav.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
	constructor(
		private calendarService: CalendarService,
		private loadingService: LoadingService,
		private navService: NavService,
		private route: ActivatedRoute,
	) { }

	@HostBinding("class") containerClasses = "flex-centered__column full-viewport";

	public loadingState$ = new Subject<boolean>();

	ngOnInit(): void {
		this.setupSubscriptions();
		this.calendarService.getCalendar(CalendarType.Lunar);
	}

	/**
	 * Set the header title according to the route.
	 */
	setupSubscriptions(): void {
		this.route.queryParams.subscribe((params) => {
			this.navService.setTitle(params?.title);
		});

		this.loadingService.loadingChanged$
			.subscribe((loadingState: boolean) => {
				this.loadingState$.next(loadingState);
			});
	}

	closeMenu(): void {
		this.navService.closeNavMenu();
	}
}
