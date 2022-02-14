import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'input-text',
    loadChildren: () => import('./modules/input-text/input-text.module').then(m => m.InputTextModule)
  },
  {
    path: 'radio-button-checkbox',
    loadChildren: () => import('./modules/radio-button/radio-button-checkbox.module').then(m => m.RadioButtonCheckboxModule)
  },
  {
    path: 'selector',
    loadChildren: () => import('./modules/selector/selector.module').then(m => m.SelectorModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule)
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
