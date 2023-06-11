import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardComponent } from './components/card/card.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { JobsComponent } from './components/pages/jobs/jobs.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/pages/home/home.component';
import { LogoutComponent } from './components/pages/logout/logout.component';
import { HoverDirective } from './directive/hover.directive';


@NgModule({
  declarations:[
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    CardComponent,
    AdminComponent,
    JobsComponent,
    HomeComponent,
    LogoutComponent,
    HoverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
