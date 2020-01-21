import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ValidatorMessageComponent } from './validator-message.directive';
import { CustomSelectComponent } from './shared/custom-select/custom-select.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidatorMessageComponent,
    CustomSelectComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
