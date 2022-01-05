import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomRadioButtonComponent } from "./custom-radio-button/custom-radio-button.component";
import { RadioButtonRoutingModule } from "./radio-button-routing.module";
import { RadioButtonComponent } from "./radio-button/radio-button.component";

@NgModule({
  imports: [
    CommonModule,
    RadioButtonRoutingModule
  ],
  declarations: [
    RadioButtonComponent,
    CustomRadioButtonComponent
  ]
})
export class RadioButtonModule {}
