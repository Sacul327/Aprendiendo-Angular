
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from '../app/components/body/body.component' ;
import { CatalogoComponent } from './components/catalogo/catalogo.component';

const APP_ROUTES: Routes = [
  { path: 'body', component: BodyComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'body' },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class APP_ROUTING { }