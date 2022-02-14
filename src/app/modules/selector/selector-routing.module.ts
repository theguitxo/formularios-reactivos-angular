import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SelectorComponent } from "./selector/selector.component";

const routes: Routes = [
  {
    path: '',
    component: SelectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectorRoutingModule {}
