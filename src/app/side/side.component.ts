import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  @ViewChild('dockBar',{static:true}) dockBar: SidebarComponent;

  constructor() { }
  public enableDock: boolean = true;
  public width: string = '220px';
  public dockSize: string = '72px';
  toggleClick() {
      this.dockBar.toggle();
  }
  ngOnInit() {
  }

}
