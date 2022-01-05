import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'input-text',
    loadChildren: () => import('./modulos/input-text/input-text.module').then(m => m.InputTextModule)
  },
  {
    path: 'radio-button',
    loadChildren: () => import('./modulos/radio-button/radio-button.module').then(m => m.RadioButtonModule)
  },
  {
    path: 'selector',
    loadChildren: () => import('./modulos/selector/selector.module').then(m => m.SelectorModule)
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
