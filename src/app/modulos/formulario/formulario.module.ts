import { NgModule } from "@angular/core";
import { ComunModule } from "src/app/comun/comun.module";
import { FormularioRoutingModule } from "./formulario-routing.module";
import { FormularioComponent } from "./formulario/formulario.component";
import { SelectorIdiomaComponent } from "./selector-idioma/selector-idioma.component";

@NgModule({
  imports: [
    ComunModule,
    FormularioRoutingModule
  ],
  declarations: [
    FormularioComponent,
    SelectorIdiomaComponent
  ]
})
export class FormularioModule {}
