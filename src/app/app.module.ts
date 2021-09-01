import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { Menu1Component } from './menu/menu1/menu1.component';
import { Menu2Component } from './menu/menu2/menu2.component';
import { Menu3Component } from './menu/menu3/menu3.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { Menu4Component } from './menu/menu4/menu4.component';
import { Menu5Component } from './menu/menu5/menu5.component';
import { TileComponent } from './tile/tile.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    HeaderComponent,
    Menu1Component,
    Menu2Component,
    Menu3Component,
    MenuItemComponent,
    Menu4Component,
    Menu5Component,
    TileComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
