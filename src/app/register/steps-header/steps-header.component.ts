import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-steps-header',
  templateUrl: './steps-header.component.html',
  styleUrls: ['./steps-header.component.css']
})
export class StepsHeaderComponent implements OnInit {

  @Input() type = 'User';

  constructor() { }

  ngOnInit() {
  }

}
