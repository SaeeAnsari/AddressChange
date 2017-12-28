import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-user-details-view',
  templateUrl: './user-details-view.component.html',
  styleUrls: ['./user-details-view.component.css'],
  providers: [UserService]
})

export class UserDetailsViewComponent implements OnInit {

  @Input() UserID = 0;
  public user = {};

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.UserID = this.userService.getLoggedInUserID();
    this.UserID = 15;
    this.loadUser();
  }

  public loadUser() {
    this.userService.getUser(this.UserID).subscribe(sub => {
      this.user = sub;
    });
  }

}
