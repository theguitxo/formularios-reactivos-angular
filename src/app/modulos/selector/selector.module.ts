import { NgModule } from "@angular/core";
import { ComunModule } from "src/app/comun/comun.module";
import { SelectorRoutingModule } from "./selector-routing.module";
import { CVASelectorComponent } from "./selector/cva-selector/cva-selector.component";
import { SelectorComponent } from "./selector/selector.component";

@NgModule({
  imports: [
    ComunModule,
    SelectorRoutingModule
  ],
  declarations: [
    SelectorComponent,
    CVASelectorComponent
  ]
})
export class SelectorModule {}
