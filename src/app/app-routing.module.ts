import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {ContactDetailComponent} from './components/contact-detail/contact-detail.component';
import {ContactListComponent} from './components/contact-list/contact-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      shouldReuse: true
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ContactListComponent,
        data: {
          shouldReuse: true
        }
      },
      {
        path: 'detail',
        component: ContactDetailComponent,
        data: {
          shouldReuse: true
        }
      }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
