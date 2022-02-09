import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/comun/shared.module";
import { SelectorRoutingModule } from "./selector-routing.module";
import { CVASelectorComponent } from "./selector/cva-selector/cva-selector.component";
import { SelectorComponent } from "./selector/selector.component";
import { MaterialSelectorComponent } from "./selector/material-selector/material-selector.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    SharedModule,
    SelectorRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule

  ],
  declarations: [
    SelectorComponent,
    CVASelectorComponent,
    MaterialSelectorComponent
  ]
})
export class SelectorModule {}
