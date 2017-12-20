import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {routes} from './routes.config';



import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {RegisterUserComponent} from './register/register-user/register-user.component';
import { RegisterAddressComponent } from './Register/register-address/register-address.component';
import { RegisterSearchablePayeeListComponent } from './Register/register-searchable-payee-list/register-searchable-payee-list.component';
import { NewPayeeComponent } from './register/new-payee/new-payee.component';
import { PayeeItemComponent } from './register/payee-item/payee-item.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegisterUserComponent,
    RegisterAddressComponent,
    RegisterSearchablePayeeListComponent,
    NewPayeeComponent,
    PayeeItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
