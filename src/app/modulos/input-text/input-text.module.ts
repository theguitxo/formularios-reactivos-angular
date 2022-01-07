import { NgModule } from "@angular/core";
import { ComunModule } from "src/app/comun/comun.module";
import { InputTextRoutingModule } from "./input-text-routing.module";
import { CVAInputTextComponent } from "./input-text/cva-input-text/cva-input-text.component";
import { InputTextComponent } from './input-text/input-text.component';

@NgModule({
  imports: [
    ComunModule,
    InputTextRoutingModule
  ],
  declarations: [
    InputTextComponent,
    CVAInputTextComponent
  ]
})
export class InputTextModule {}
