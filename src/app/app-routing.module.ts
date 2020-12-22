import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { DomTestComponent } from './components/dom-test/dom-test.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'dom-testing',
    component: DomTestComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'routes',
    loadChildren: () =>
      import('./routes/routes.module').then((m) => m.RoutesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
