import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TextAreaComponent } from "./text-area/text-area.component";

const routes: Routes = [
  {
    path: '',
    component: TextAreaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextAreaRoutingModule {}
