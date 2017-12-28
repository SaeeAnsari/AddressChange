import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css'],
  providers: [UserService]
})
export class UserAddressComponent implements OnInit {

  @Input() UserID = 0;
  public newAddress = {};
  public oldAddress = {};

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
    this.UserID = this.userService.getLoggedInUserID();
    
    this.loadAddress();
  }

  public loadAddress(){
    this.userService.getUserOldNewAddress(this.UserID).subscribe(sub => {
      this.newAddress = sub.NewAddress;
      this.oldAddress = sub.OldAddress;
    });
  }

  public editClicked(){
    this.router.navigate(['register/addresses']);
  }
}
