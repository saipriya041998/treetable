import { Routes, RouterModule } from '@angular/router';
import { SynctreeComponent } from './synctree/synctree.component';
import { HomeComponent } from './home/home.component';
import { SomrComponent } from './somr/somr.component';

const arr:Routes=[
  {path:'home',component:HomeComponent},
  {path:'tree',component:SynctreeComponent},
  {path:'pr',component:SomrComponent}
];

export const routing=RouterModule.forRoot(arr);
