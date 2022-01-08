import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComunModule } from "src/app/comun/comun.module";
import { CustomRadioButtonComponent } from "./custom-radio-button/custom-radio-button.component";
import { RadioButtonCheckboxRoutingModule } from "./radio-button-checkbox-routing.module";
import { RadioButtonCheckboxComponent } from "./radio-button-checkbox/radio-button-checkbox.component";

@NgModule({
  imports: [
    ComunModule,
    RadioButtonCheckboxRoutingModule
  ],
  declarations: [
    RadioButtonCheckboxComponent,
    CustomRadioButtonComponent
  ]
})
export class RadioButtonCheckboxModule {}
