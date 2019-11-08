import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-somr',
  templateUrl: './somr.component.html',
  styleUrls: ['./somr.component.css']
})
export class SomrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  printPage(){
    window.print();
  }
}
