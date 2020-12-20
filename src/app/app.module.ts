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
import { CounterUtComponent } from './components/counter-ut/counter-ut.component';
import { EventEmitterComponent } from './components/event-emitter/event-emitter.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ServiceUtComponent } from './components/service-ut/service-ut.component';
import { DomTestComponent } from './components/dom-test/dom-test.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    SidebarComponent,
    CounterUtComponent,
    EventEmitterComponent,
    PrivacyComponent,
    ServiceUtComponent,
    DomTestComponent,
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
