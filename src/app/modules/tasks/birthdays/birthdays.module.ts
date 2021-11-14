import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BirthdaysComponent } from "./birthdays.component";
import { BirthdayTasksRoutingModule } from "./birthdays-routing.module";
import { ListComponent } from "./list/list.component";

import { ActionsModule } from "../../actions/actions.module";
import { ElementModule } from "../../element/element.module";
import { IndicatorModule } from "../../indicator/indicator.module";

@NgModule({
	declarations: [
		BirthdaysComponent,
		ListComponent,
	],
	imports: [
		ActionsModule,
		CommonModule,
		ElementModule,
		BirthdayTasksRoutingModule,
		IndicatorModule,
	],
	exports: [
		BirthdaysComponent,
	]
})
export class BirthdaysTaskModule { }