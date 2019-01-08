import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {RouteReuseStrategy} from '@angular/router';
import {CustomRouteResueStrategy} from './custom-route-resue-strategy';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ContactListComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: RouteReuseStrategy, useClass: CustomRouteResueStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
