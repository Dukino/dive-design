import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { Menu1Component } from './menu/menu1/menu1.component';
import { Menu2Component } from './menu/menu2/menu2.component';
import { Menu3Component } from './menu/menu3/menu3.component';
import { Menu4Component } from './menu/menu4/menu4.component';
import { Menu5Component } from './menu/menu5/menu5.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  { path: 'Home', component: HomeComponent },
  {
    path: 'Menu',
    component: MenuComponent,
    children: [
      { path: 'menu1', component: Menu1Component },
      { path: 'menu2', component: Menu2Component },
      { path: 'menu3', component: Menu3Component },
      { path: 'menu4', component: Menu4Component },
      { path: 'menu5', component: Menu5Component },
    ],
  },
  { path: 'About', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
