import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFacture } from './main-facture/main-facture';
import { ListFacture } from './list-facture/list-facture';
import { AddFacture } from './add-facture/add-facture';

const routes: Routes = [
   {
    path: '',
    component: MainFacture,
    children:[
      {
        path: 'list',
       component: ListFacture,
      },
      {
        path: 'add',
       component: AddFacture,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturationRoutingModule { }
