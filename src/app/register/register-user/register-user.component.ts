import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


//PHONE NUMBER MASK TOOL
//http://www.coderbro.com/angular2/2017/04/21/format-phone-number-in-form-input-with-angular2.html



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
  public mask: any[] = ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public userID = 0;
  @Input() IsNew = '';


  constructor(private _fb: FormBuilder, private userService: UserService, private route: ActivatedRoute, public router: Router) {


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

    this.route.params.subscribe(params => {
      if (params['isNew'] && params['isNew'] === 'Yes') {
        this.IsNew = params['isNew'];
      }
      else {
        this.userID = this.userService.getLoggedInUserID();
        this.userService.getUser(this.userID).subscribe(sub => {
          this.userForm.setValue({
            FirstName: sub.FirstName,
            LastName: sub.LastName,
            Email: sub.Email,
            Phone: sub.Phone,
            Password: sub.Password,
            ConfirmPassword: sub.Password
          });
        });
      }
    });
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
        if (this.userID > 0) {
          model.ID = this.userID;
        }
        this.userService.SaveUser(model).subscribe(sub => {
          if (sub != null) {
            sessionStorage.setItem('UserID', sub);
            if (this.IsNew === 'Yes') {
              this.router.navigate(['/register/addresses', this.IsNew]);
            }
            else {
              this.router.navigate(['dashboard']);
            }
          }
        });
      }
    }
  }
}
