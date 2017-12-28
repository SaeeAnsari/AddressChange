import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RegisterUserComponent } from './register/register-user/register-user.component';
import {RegisterAddressComponent} from './register/register-address/register-address.component';
import {RegisterSearchablePayeeListComponent} from './register/register-searchable-payee-list/register-searchable-payee-list.component';
import {UserConfirmationComponent} from './register/user-confirmation/user-confirmation.component';
import {DashboardComponent} from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'register/user', component: RegisterUserComponent },
  { path: 'register/user/:isNew', component: RegisterUserComponent },
  { path: 'register/addresses', component: RegisterAddressComponent },
  { path: 'register/addresses/:isNew', component: RegisterAddressComponent },
  { path: 'register/providers', component: RegisterSearchablePayeeListComponent},
  { path: 'register/providers/:isNew', component: RegisterSearchablePayeeListComponent},
  { path: 'register/confirm', component: UserConfirmationComponent},
  { path: 'dashboard', component: DashboardComponent }
];
