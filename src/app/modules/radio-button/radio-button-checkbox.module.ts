import { NgModule } from "@angular/core";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { SharedModule } from "src/app/shared/shared.module";
import { CustomRadioButtonComponent } from "./custom-radio-button/custom-radio-button.component";
import { CVARadioButtonComponent } from "./cva-radio-button/cva-radio-button.component";
import { RadioButtonCheckboxRoutingModule } from "./radio-button-checkbox-routing.module";
import { RadioButtonCheckboxComponent } from "./radio-button-checkbox/radio-button-checkbox.component";

@NgModule({
  imports: [
    SharedModule,
    RadioButtonCheckboxRoutingModule
  ],
  declarations: [
    RadioButtonCheckboxComponent,
    CustomRadioButtonComponent,
    CVARadioButtonComponent
  ],
  providers: [
    StyleSelectorService
  ]
})
export class RadioButtonCheckboxModule {}
