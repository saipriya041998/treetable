import { Routes, RouterModule } from '@angular/router';
import { SynctreeComponent } from './synctree/synctree.component';
import { HomeComponent } from './home/home.component';

const arr:Routes=[
  {path:'home',component:HomeComponent},
  {path:'tree',component:SynctreeComponent}
];

export const routing=RouterModule.forRoot(arr);
