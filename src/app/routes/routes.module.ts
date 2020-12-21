import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { RoutesComponent } from './routes/routes.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: RoutesComponent,
    children: [
      {
        path: '',
        redirectTo: 'about'
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'faq',
        component: FaqComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  }

];

@NgModule({
  declarations: [FaqComponent, AboutComponent, RoutesComponent, ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class RoutesModule { }
