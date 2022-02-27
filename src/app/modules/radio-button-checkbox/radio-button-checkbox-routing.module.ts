import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RadioButtonCheckboxComponent } from "./radio-button-checkbox/radio-button-checkbox.component";

const routes: Routes = [
  {
    path: '',
    component: RadioButtonCheckboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadioButtonCheckboxRoutingModule {}
