import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  providers: [UserService]
})
export class RegisterUserComponent implements OnInit {

  public userForm: FormGroup;
  @Output() UserCreatedEvent = new EventEmitter();
  public passwordMatchError = false;

  constructor(private _fb: FormBuilder, private userService: UserService) {
    /*this.userForm = this._fb.group({
      FirstName: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
      LastName: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
      Email: ['', [<any>Validators.required]],
      Phone: ['', [<any>Validators.required, <any>Validators.minLength(10)]],
      Password: ['', [<any>Validators.required, <any>Validators.minLength(6)]],
      ConfirmPassword: ['', [Validators.required, <any>Validators.minLength(6)]]
    });*/

    this.userForm = new FormGroup({
      FirstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      LastName: new FormControl(''),
      Email: new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]),
      Phone: new FormControl('', [Validators.required, Validators.minLength(6)]),
      Password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      ConfirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit() {
  }

  saveUser(model, isValid) {

    this.passwordMatchError = false;

    if (isValid) {

      if (model.Password !== model.ConfirmPassword) {
        this.passwordMatchError = true;
      }
      // tslint:disable-next-line:one-line
      else {
        console.log('Entering Save');
        this.userService.SaveUser(model).subscribe(sub => {
          if (sub != null) {
            sessionStorage.setItem('UserID', sub);
            this.UserCreatedEvent.emit({ userID: sub });
          }
        });
      }
    }
  }
}
