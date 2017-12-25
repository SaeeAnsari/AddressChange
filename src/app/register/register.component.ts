import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userID: number;

  constructor(public router: Router) { }

  ngOnInit() {
    this.userID = 9;
  }

  userCreated(data) {
    // tslint:disable-next-line:one-line
    if (data && data.userID && data.userID > 0) {
      this.userID = data.userID;
      console.log('user created');
      this.router.navigate(['/register/addresses', 'Yes']);
    }
  }

  userAddresSaved(data) {
    console.log('User Address saved');
  }



}
