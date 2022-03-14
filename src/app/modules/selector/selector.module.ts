import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { SelectorRoutingModule } from "./selector-routing.module";
import { SelectorComponent } from "./selector/selector.component";
import { MaterialSelectorComponent } from "./selector/material-selector/material-selector.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { SimpleSelectorComponent } from "./selector/simple-selector/simple-selector.component";
import { RequiredSelectorComponent } from "./selector/required-selector/required-selector.component";
import { CVASelectorComponent } from "./selector/cva-selector/cva-selector/cva-selector.component";
import { CVASelectorExampleComponent } from "./selector/cva-selector/cva-selector-example/cva-selector-example.component";

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
    SimpleSelectorComponent,
    RequiredSelectorComponent,
    CVASelectorComponent,
    CVASelectorExampleComponent,
    MaterialSelectorComponent
  ],
  providers: [
    StyleSelectorService
  ]
})
export class SelectorModule {}
