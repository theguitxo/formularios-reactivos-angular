import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { FormRoutingModule } from "./form-routing.module";
import { FormComponent } from "./form/form.component";
import { LangSelectorComponent } from "./lang-selector/lang-selector.component";

@NgModule({
  imports: [
    SharedModule,
    FormRoutingModule
  ],
  declarations: [
    FormComponent,
    LangSelectorComponent
  ]
})
export class FormModule {}
