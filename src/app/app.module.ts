import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { ContactPageComponent } from "./components/contact-page/contact-page.component";
import { BlogPageComponent } from "./components/blog-page/blog-page.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ContactService } from "./contact.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    ContactPageComponent,
    BlogPageComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
