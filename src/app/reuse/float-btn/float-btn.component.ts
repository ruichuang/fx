import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-float-btn',
  templateUrl: './float-btn.component.html',
  styleUrls: ['./float-btn.component.css']
})
export class FloatBtnComponent implements OnInit {

  @Input('icon') icon: string;
  @Input('class') class: string;


  @HostBinding('class.right') right = false;
  @HostBinding('class.middle') middle = false;
  @HostBinding('class.left') left = false;

  constructor() { }

  ngOnInit() {
    switch (this.class) {
      case 'right':
        this.right = true;
        this.middle = false;
        this.left = false;
        break;
      case 'middle':
        this.right = false;
        this.middle = true;
        this.left = false;
        break;
      case 'left':
        this.right = false;
        this.middle = false;
        this.left = true;
        break;
      case 'default':
        break;
    }
  }
}

