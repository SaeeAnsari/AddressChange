import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { PayeeService } from '../../services/payee.service';


@Component({
  selector: 'app-new-payee',
  templateUrl: './new-payee.component.html',
  styleUrls: ['./new-payee.component.css'],
  providers: [PayeeService]
})
export class NewPayeeComponent implements OnInit {

  @Output() CancelNewPayee = new EventEmitter();
  @Output() PayeeCreated = new EventEmitter();
  public payeeForm: FormGroup;
  @Input() UserID = '';

  constructor(private payeeService: PayeeService) {
    this.payeeForm = new FormGroup({
      Name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]),
      Country: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)])
    });
  }

  ngOnInit() {
  }

  cancelClicked() {
    this.CancelNewPayee.emit();
  }

  savePayee(model, isValid) {
    if (isValid) {
      const data = {
        Name: model.Name,
        Country: model.Country,
        Active: true
      };
      this.payeeService.SavePayee(data).subscribe(sub => {
        if (sub != null) {
          this.PayeeCreated.emit({payeeID: sub});
        }
      });
    }
  }

}
