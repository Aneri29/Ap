import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LogComponent } from './log/log.component';
import { RegComponent } from './reg/reg.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LogComponent,
    RegComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
