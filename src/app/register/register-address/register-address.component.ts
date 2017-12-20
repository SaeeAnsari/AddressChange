import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: ['./register-address.component.css'],
  providers: [UserService]
})
export class RegisterAddressComponent implements OnInit {

  public addressForm: FormGroup;
  @Output() UserAddressSaved = new EventEmitter();
  @Input() UserID: number;

  constructor(private userService: UserService) {
    this.addressForm = new FormGroup({
      OldStreet: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
      OldCity: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      OldPostalZip: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      OldCountry: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),

      NewStreet: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
      NewCity: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      NewPostalZip: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      NewCountry: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)])
    });
  }

  ngOnInit() {
  }

  saveAddress(model, isValid) {
    const oldAddress = {
      Street: model.OldStreet,
      City: model.OldCity,
      PostalZip: model.OldPostalZip,
      Country: model.OldCountry
    };

    const newAddress = {
      Street: model.NewStreet,
      City: model.NewCity,
      PostalZip: model.NewPostalZip,
      Country: model.NewCountry
    };


    this.userService.SaveUserAddress(this.UserID, oldAddress, newAddress).subscribe(sub => {
      if (sub != null) {
        this.UserAddressSaved.emit({addressSaved: sub});
      }
    });


  }
}
