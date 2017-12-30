import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public failedLogin = false;

  constructor(
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private userService: UserService) {
    this.loginForm = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]),
      Password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit() {
  }

  loginUser(model, valid) {
    if (valid) {
      this.userService.loginUser(model.Email, model.Password).subscribe(sub => {
        if (sub > 0) {
          sessionStorage.setItem('UserID', sub);
          this.failedLogin = false;
          this.router.navigate(['dashboard']);
        }
        else { this.failedLogin = true; }
      });
    }
  }

  registerClick(){
    this.router.navigate(['register/user', 'Yes']);
  }
}
