import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/common/nav/nav.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { EventPreviewComponent } from './components/common/event-preview/event-preview.component';
import { LoginComponent } from './components/common/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    EventPreviewComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
