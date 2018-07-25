import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArtComponent } from './articleList/articleList.component';
import { ControlMenuComponent } from './controls/control-menu/control-menu.component';
import { ArticleComponent } from './article/article/article.component';
import { TextColorComponent } from './controls/control-menu/text-color/text-color.component';
import { TextBackgroundComponent } from './controls/control-menu/text-background/text-background.component';
import { TextSizeComponent } from './controls/control-menu/text-size/text-size.component';
import { ImageComponent } from './article/image/image.component';
import { TitleComponent } from './article/title/title.component';
import { TextComponent } from './article/text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtComponent,
    ControlMenuComponent,
    ArticleComponent,
    TextColorComponent,
    TextBackgroundComponent,
    TextSizeComponent,
    ImageComponent,
    TitleComponent,
    TextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
