import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RadioButtonComponent } from "./radio-button/radio-button.component";

const routes: Routes = [
  {
    path: '',
    component: RadioButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadioButtonRoutingModule {}
