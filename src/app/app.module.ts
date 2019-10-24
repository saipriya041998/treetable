import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';
import { SynctreeComponent } from './synctree/synctree.component';
import { PageService, SortService, FilterService,EditService,ToolbarService } from '@syncfusion/ej2-angular-treegrid';
@NgModule({
  declarations: [
    AppComponent,
    SynctreeComponent
  ],
  imports: [
    BrowserModule,
    TreeGridModule
  ],
  providers: [PageService,
    SortService,
    FilterService,
    EditService,
    ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
