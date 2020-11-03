import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  RxFormBuilder,
  IFormGroup,
  RxwebValidators,
} from '@rxweb/reactive-form-validators';
import { User } from '../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public signInForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: RxFormBuilder,
    private userService: UserService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    let user = new User();
    this.signInForm = this.formBuilder.formGroup(user);
  }

  public submit() {
    if (this.signInForm.valid) {
      let userEmail = this.signInForm.controls.email.value;
      let password = this.signInForm.controls.password.value;
      this.userService.getUser().subscribe((user) => {
        if (userEmail === user.email && password === user.password) {
          this.router.navigate(['dashboard']);
        } else {
          const dialogRef = this.dialog.open(ErrorDialogComponent, {
            width: '350px',
            height: '180px',
            data: {
              message: 'Invalid email or password , Please try again',
            },
          });
        }
      });
    }
  }
}
