import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProvider } from './add-provider/add-provider';
import { ListProviders } from './list-providers/list-providers';
import { Contact } from './contact/contact';
import { UpdateProvider } from './update-provider/update-provider';
import { DetailsProvider } from './details-provider/details-provider';
import { AddArticle } from './add-article/add-article';
import { ListArticles } from './list-articles/list-articles';

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
  },
  {
    path: "addarticle",
    component: AddArticle
  },
  {
    path: "listarticles",
    component: ListArticles
  },
  {
    path: 'facturation',
    loadChildren: () => import('./facturation/facturation-module').then(m => m.FacturationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
