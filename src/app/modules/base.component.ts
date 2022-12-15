import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  styleUrls: ['./base.component.scss'],
  templateUrl: './base.component.html',
})
export class BaseComponent implements OnInit {

  sidebarExpanded = true;

  constructor() { }

  ngOnInit(): void {
  }

}
