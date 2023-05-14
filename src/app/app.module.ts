import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HireMeComponent } from './hire-me/hire-me.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HireMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
