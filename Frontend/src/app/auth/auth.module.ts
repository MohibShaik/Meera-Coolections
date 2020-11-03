import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [LoginComponent, ErrorDialogComponent, SplashScreenComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RxReactiveFormsModule,
  ],
})
export class AuthModule {}
