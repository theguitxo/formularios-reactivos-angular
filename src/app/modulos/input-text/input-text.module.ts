import { NgModule } from "@angular/core";
import { ComunModule } from "src/app/comun/comun.module";
import { InputTextRoutingModule } from "./input-text-routing.module";
import { CVAInputTextExampleComponent } from "./input-text/cva-input-text/cva-input-text-example/cva-input-text-example.component";
import { CVAInputTextComponent } from "./input-text/cva-input-text/cva-input-text/cva-input-text.component";
import { InputNumberMinMaxComponent } from "./input-text/input-number-min-max/input-number-min-max.component";
import { InputTextEmailComponent } from "./input-text/input-text-email/input-text-email.component";
import { InputTextMinMaxLengthComponent } from "./input-text/input-text-min-max-length/input-text-min-max-length.component";
import { InputTextRequiredComponent } from "./input-text/input-text-required/input-text-required.component";
import { InputTextSimpleComponent } from "./input-text/input-text-simple/input-text-simple.component";
import { InputTextValidPatternComponent } from "./input-text/input-text-valid-pattern/input-text-valid-pattern.component";
import { InputTextComponent } from './input-text/input-text.component';

@NgModule({
  imports: [
    ComunModule,
    InputTextRoutingModule
  ],
  declarations: [
    InputTextComponent,
    InputTextSimpleComponent,
    InputTextRequiredComponent,
    InputTextMinMaxLengthComponent,
    InputTextEmailComponent,
    InputNumberMinMaxComponent,
    InputTextValidPatternComponent,
    CVAInputTextComponent,
    CVAInputTextExampleComponent
  ]
})
export class InputTextModule {}
