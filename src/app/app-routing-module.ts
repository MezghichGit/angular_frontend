import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProvider } from './add-provider/add-provider';
import { ListProviders } from './list-providers/list-providers';
import { Contact } from './contact/contact';
import { UpdateProvider } from './update-provider/update-provider';
import { DetailsProvider } from './details-provider/details-provider';

const routes: Routes = [
  {
    path: "addprovider",
    component: AddProvider
  },
  {
    path: "listproviders",
    component: ListProviders
  },
  {
    path: "contact",
    component: Contact
  },
  {
    path: "updateprovider/:id",
    component: UpdateProvider
  },
  {
    path: "detailsprovider/:id",
    component: DetailsProvider
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
