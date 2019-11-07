import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { TreeService } from './tree.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'first';
  public data: Object[];
  public arr:any[];
  constructor(private _data:TreeService){}
  ngOnInit(){
    // this.data = sampleData;
    this._data.getallarticles().subscribe(
      (data:any[])=>{
        this.data=data;
        console.log(this.data);
        this.arr=this.data['kbArticles'];
        console.log(this.arr);
      }
    );
  }
}
