import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PayeeService } from '../../services/payee.service';

@Component({
  selector: 'app-payee-data',
  templateUrl: './payee-data.component.html',
  styleUrls: ['./payee-data.component.css'],
  providers: [PayeeService, UserService]
})

export class PayeeDataComponent implements OnInit {

  @Input() UserID = 0;
  private lstPayees = [];

  constructor(
    private payeeService: PayeeService,
    private userService: UserService,
    private route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.UserID = this.userService.getLoggedInUserID();
   
    this.loadPayees();
  }

  loadPayees() {
    this.lstPayees = [];
    const payeesUnfilteres = [];
    this.payeeService.GetPayees(this.UserID, '').subscribe(sub => {
      sub.forEach(element => {
        payeesUnfilteres.push({
          ID: element.ID,
          Name: element.Name,
          AccountNumber: element.AccountNumber
        });
      });

      this.lstPayees = payeesUnfilteres.filter(item => item.AccountNumber != null);
    });
  }

  public editClicked(){
    this.router.navigate(['register/providers']);
  }
}
