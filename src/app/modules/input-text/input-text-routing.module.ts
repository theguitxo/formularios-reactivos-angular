import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InputTextComponent } from "./input-text/input-text.component";

const routes: Routes = [
  {
    path: '',
    component: InputTextComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputTextRoutingModule {}
