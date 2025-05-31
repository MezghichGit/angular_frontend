import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { ListProviders } from './list-providers/list-providers';
import { AddProviderPipe } from './pipes/add-provider-pipe';

@NgModule({
  declarations: [
    App,
    Contact,
    Home,
    ListProviders,
    AddProviderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
