import { Component, OnInit, Input } from '@angular/core';
import { PayeeService } from '../../services/payee.service';
import { UserService } from '../../services/user.service';
import { identifierModuleUrl } from '@angular/compiler';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { Observable } from 'rxjs/Observable';
// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-register-searchable-payee-list',
  templateUrl: './register-searchable-payee-list.component.html',
  styleUrls: ['./register-searchable-payee-list.component.css'],
  providers: [PayeeService, UserService]
})
export class RegisterSearchablePayeeListComponent implements OnInit {

  private createPayee = false;

  @Input() UserID: number;
  closeResult: string;
  private lstPayees = [];
  searchVal = '';
  searchInput = new FormControl();

  hasAccountNumbers = false;


  constructor(
    private payeeService: PayeeService,
    private userService: UserService,
    private route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {


    this.UserID = this.userService.getLoggedInUserID();


    this.searchInput.valueChanges
      .debounceTime(1000)
      .distinctUntilChanged()
      .subscribe(va => {
        this.loadPayees();
      });
  }

  loadPayees() {
    this.lstPayees = [];
    this.payeeService.GetPayees(this.UserID, this.searchVal).subscribe(sub => {
      sub.forEach(element => {
        this.lstPayees.push({
          ID: element.ID,
          Name: element.Name,
          AccountNumber: element.AccountNumber
        });
      });
      this.hasAccountNumbers = false;
      this.lstPayees.forEach(data => {
        if (data.AccountNumber != null && data.AccountNumber.length > 0) {
          this.hasAccountNumbers = true;
        }
      });
    });
  }

  addNewPayee(content) {
    this.createPayee = true;
  }

  cancelNewPayee() {
    this.createPayee = false;
  }

  payeeCreated() {
    this.createPayee = false;
    this.loadPayees();
  }

  userPayeeUpdated() {
    this.loadPayees();
  }

  continueToConfirmation() {
    this.router.navigate(['register/confirm']);
  }
}
