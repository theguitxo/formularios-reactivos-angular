import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { RadioButtonCheckboxRoutingModule } from "./radio-button-checkbox-routing.module";

import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from '@angular/material/checkbox';

import { StyleSelectorService } from "src/app/shared/services/style-selector.service";

import { RadioButtonCheckboxComponent } from "./radio-button-checkbox/radio-button-checkbox.component";
import { RadioButtonRequiredComponent } from "./radio-button-required/radio-button-required.component";
import { CVARadioButtonComponent } from "./cva-radio-button/cva-radio-button/cva-radio-button.component";
import { CVARadioButtonExampleComponent } from "./cva-radio-button/cva-radio-button-example/cva-radio-button-example.component";
import { CheckboxRequiredComponent } from "./checkbox-required/checkbox-required.component";
@NgModule({
  imports: [
    SharedModule,
    RadioButtonCheckboxRoutingModule,
    MatRadioModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  declarations: [
    RadioButtonCheckboxComponent,
    RadioButtonRequiredComponent,
    CVARadioButtonComponent,
    CVARadioButtonExampleComponent,
    CheckboxRequiredComponent
  ],
  providers: [
    StyleSelectorService
  ]
})
export class RadioButtonCheckboxModule {}
