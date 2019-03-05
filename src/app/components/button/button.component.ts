import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hover-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  @Input() message: string;
  @Input() link: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    if (this.link !== undefined) {
      this.router.navigateByUrl('/' + this.link);
    }
  }
}
