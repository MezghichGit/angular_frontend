import { NgModule, NO_ERRORS_SCHEMA, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { ListProviders } from './list-providers/list-providers';
import { AddProviderPipe } from './pipes/add-provider-pipe';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Navbar } from './navbar/navbar';
import { AddProvider } from './add-provider/add-provider';

@NgModule({
  declarations: [
    App,
    Contact,
    Home,
    ListProviders,
    AddProviderPipe,
    Navbar,
    AddProvider
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [App],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
