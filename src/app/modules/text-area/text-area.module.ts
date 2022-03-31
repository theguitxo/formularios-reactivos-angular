import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { StyleSelectorService } from "src/app/shared/services/style-selector.service";
import { SharedModule } from "src/app/shared/shared.module";
import { TextAreaRoutingModule } from "./text-area-routing.module";
import { TextAreaCountComponent } from "./text-area/text-area-count/text-area-count.component";
import { TextAreaMaxComponent } from "./text-area/text-area-max/text-area-max.component";
import { TextAreaComponent } from "./text-area/text-area.component";

@NgModule({
  imports: [
    SharedModule,
    TextAreaRoutingModule,
    MatInputModule
  ],
  declarations: [
    TextAreaComponent,
    TextAreaCountComponent,
    TextAreaMaxComponent
  ],
  providers: [
    StyleSelectorService
  ]
})
export class TextAreaModule {}
