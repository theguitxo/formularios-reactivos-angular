import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'input-text',
    loadChildren: () => import('./modulos/input-text/input-text.module').then(m => m.InputTextModule)
  },
  {
    path: 'radio-button-checkbox',
    loadChildren: () => import('./modulos/radio-button/radio-button-checkbox.module').then(m => m.RadioButtonCheckboxModule)
  },
  {
    path: 'selector',
    loadChildren: () => import('./modulos/selector/selector.module').then(m => m.SelectorModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./modulos/formulario/formulario.module').then(m => m.FormularioModule)
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: '**',
    redirectTo: '/inicio'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
