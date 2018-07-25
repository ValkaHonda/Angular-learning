import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArtComponent } from './articleList/articleList.component';
import { ControlMenuComponent } from './controls/control-menu/control-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtComponent,
    ControlMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
