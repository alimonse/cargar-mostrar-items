import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from "./rutas/not-found/not-found.component";

const routes: Routes = [
  {
    path: 'aceros',
    loadChildren: () => import('./aceros/aceros.module').then(m => m.AcerosModule)
  },
  {
    path: '',
    redirectTo: 'aceros',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
