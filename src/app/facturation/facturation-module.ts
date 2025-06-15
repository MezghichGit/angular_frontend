import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturationRoutingModule } from './facturation-routing-module';
import { AddFacture } from './add-facture/add-facture';
import { ListFacture } from './list-facture/list-facture';
import { MainFacture } from './main-facture/main-facture';


@NgModule({
  declarations: [
    AddFacture,
    ListFacture,
    MainFacture
  ],
  imports: [
    CommonModule,
    FacturationRoutingModule
  ]
})
export class FacturationModule { }
