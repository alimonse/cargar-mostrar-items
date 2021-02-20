import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcerosComponent} from "./aceros/aceros.component";

const routes: Routes = [
  {
    path: 'tabla-aceros',
    component: AcerosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcerosRoutingModule { }
