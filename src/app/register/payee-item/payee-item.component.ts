import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { PayeeService } from '../../services/payee.service';

@Component({
  selector: 'app-payee-item',
  templateUrl: './payee-item.component.html',
  styleUrls: ['./payee-item.component.css'],
  providers: [PayeeService]
})
export class PayeeItemComponent implements OnInit {

  @Input() ID = '';
  @Input() Name = '';
  @Input() AccountNumber = '';
  @Input() PhoneNumber = '';
  @Input() UserID = '';
  @Output() UserPayeeSaved = new EventEmitter();

  public payeeItem: FormGroup;

  private itemSaved = false;
  private itemClicked = false;

  constructor(public payeeService: PayeeService) {
    this.payeeItem = new FormGroup({
      AccountNumber: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
    });
  }

  ngOnInit() {
    if (this.AccountNumber.length > 0) {
      this.itemClicked = true;
    }
  }

  payeeItemClicked() {
    this.itemClicked = true;
  }

  SaveUserPayee(model, isValid) {
    if (isValid) {
      this.payeeService.SaveUserPayee(this.UserID, this.ID, model.AccountNumber).subscribe(sub => {
        this.itemSaved = true;
        this.UserPayeeSaved.emit();

        setTimeout(() => {
          this.itemSaved = false;
        }, 2000);
      });
    }
  }


  deletePayee() {
    this.payeeService.DeleteUserPayee(this.UserID, this.ID).subscribe(sub => {
      this.itemClicked = false;
      this.UserPayeeSaved.emit();
    });
  }

}
