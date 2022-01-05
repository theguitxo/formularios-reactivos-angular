import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SelectorRoutingModule } from "./selector-routing.module";
import { SelectorComponent } from "./selector/selector.component";

@NgModule({
  imports: [
    CommonModule,
    SelectorRoutingModule
  ],
  declarations: [
    SelectorComponent
  ]
})
export class SelectorModule {}
