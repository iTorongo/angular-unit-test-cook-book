import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CounterComponent } from './components/counter/counter.component';
import { EventEmitterComponent } from './components/event-emitter/event-emitter.component';
import { ChangeBackgroundComponent } from './components/change-background/change-background.component';
import { ServiceUtComponent } from './components/service-ut/service-ut.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    SidebarComponent,
    CounterComponent,
    EventEmitterComponent,
    ChangeBackgroundComponent,
    ServiceUtComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UtilsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
