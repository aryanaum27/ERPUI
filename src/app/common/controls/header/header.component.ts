import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'src/app/erp-models/menu/menuitem.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  public togglenav()
  {
    this.sideNavEvent.emit();
  }
}
