import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { InformationComponent } from './components/information/information.component';
import { ProfSkillsComponent } from './components/prof-skills/prof-skills.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';


@NgModule({
  declarations:[
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    InformationComponent,
    ProfSkillsComponent,
    SocialmediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
