import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserService]
})
export class DashboardComponent implements OnInit {

  constructor(public router: Router, public userService: UserService) { }

  ngOnInit() {
    if(this.userService.getLoggedInUserID() === 0){
      this.router.navigate(['login']);
    }
  }

}
