import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'roures',
    loadChildren: () =>
      import('./routes/routes.module').then((m) => m.RoutesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
