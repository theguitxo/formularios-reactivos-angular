import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComunModule } from "src/app/comun/comun.module";
import { InputTextRoutingModule } from "./input-text-routing.module";
import { InputTextComponent } from './input-text/input-text.component';

@NgModule({
  imports: [
    ComunModule,
    InputTextRoutingModule
  ],
  declarations: [
    InputTextComponent
  ]
})
export class InputTextModule {}
