import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcerosRoutingModule } from './aceros-routing.module';
import { AcerosComponent } from './aceros/aceros.component';
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [AcerosComponent],
  imports: [
    CommonModule,
    AcerosRoutingModule,
    TableModule,
    DropdownModule,
    FormsModule

  ],
  exports:[AcerosComponent]

})
export class AcerosModule { }
