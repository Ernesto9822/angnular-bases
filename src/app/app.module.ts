import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CounterComponent } from './counter/counter.component';
//import { HeroComponent } from './heroes/hero/hero.component';
//import { ListComponent } from './heroes/list/list.component';
import { CounterModule } from './counter/components/counter/counter.module';
import { HeroesModule } from './heroes/hero.module';
import { DbzModule } from './dbz/dbz.module';
import { MainPageComponent } from './dbz/pages/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    //MainPageComponent,
   // CounterComponent,
  //  HeroComponent,
    //ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
