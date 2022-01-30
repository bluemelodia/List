import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { DirectiveModule } from "../../directives/directives.module";
import { ElementModule } from "../element/element.module";
import { FormElementModule } from "../form/form.module";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeWidgetComponent } from "./widget/home-widget.component";

@NgModule({
	declarations: [
		HomeComponent,
		HomeWidgetComponent,
	],
	imports: [
		CommonModule,
		DirectiveModule,
		ElementModule,
		HomeRoutingModule,
		FormElementModule,
		FormsModule,
	],
	exports: [
	]
})
export class HomeModule { }