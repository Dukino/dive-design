import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnInit {
  @Input() name: string = "";
  @Input() price: number = 0;
  @Input() options = [];
  @Input() isFullWidth = true;

  constructor() {}

  ngOnInit(): void {
  }
}
