import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sidebar-child',
  templateUrl: './sidebar-child.html',
  // styleUrls: ['./sidebar-child.css']
})
export class SidebarChild implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  private open: boolean = false;
  triggersidebar() {
      this.open = !this.open;
  }

}
