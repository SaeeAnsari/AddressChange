import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-details-view',
  templateUrl: './user-details-view.component.html',
  styleUrls: ['./user-details-view.component.css'],
  providers: [UserService]
})

export class UserDetailsViewComponent implements OnInit {

  @Input() UserID = 0;
  public user = {};

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
    this.UserID = this.userService.getLoggedInUserID();
    
    this.loadUser();
  }

  public loadUser() {
    this.userService.getUser(this.UserID).subscribe(sub => {
      this.user = sub;
    });
  }

  public editClicked(){
    this.router.navigate(['register/user']);
  }
}
