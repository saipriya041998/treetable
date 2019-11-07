import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';
import { SynctreeComponent } from './synctree/synctree.component';
import { PageService, SortService, FilterService,EditService,ToolbarService } from '@syncfusion/ej2-angular-treegrid';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { SideComponent } from './side/side.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SynctreeComponent,

    SideComponent,

    HomeComponent
  ],
  imports: [
    BrowserModule,
    TreeGridModule,
    HttpClientModule,
    SidebarModule,
    routing
  ],
  providers: [PageService,
    SortService,
    FilterService,
    EditService,
    ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
