import { NgModule } from "@angular/core";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { SharedModule } from "src/app/shared/shared.module";
import { RadioButtonCheckboxRoutingModule } from "./radio-button-checkbox-routing.module";
import { RadioButtonCheckboxComponent } from "./radio-button-checkbox/radio-button-checkbox.component";
import { RadioButtonRequiredComponent } from "./radio-button-required/radio-button-required.component";
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from "@angular/material/form-field";
import { CVARadioButtonComponent } from "./cva-radio-button/cva-radio-button/cva-radio-button.component";
import { CVARadioButtonExampleComponent } from "./cva-radio-button/cva-radio-button-example/cva-radio-button-example.component";

@NgModule({
  imports: [
    SharedModule,
    RadioButtonCheckboxRoutingModule,
    MatRadioModule,
    MatFormFieldModule
  ],
  declarations: [
    RadioButtonCheckboxComponent,
    RadioButtonRequiredComponent,
    CVARadioButtonComponent,
    CVARadioButtonExampleComponent
  ],
  providers: [
    StyleSelectorService
  ]
})
export class RadioButtonCheckboxModule {}
