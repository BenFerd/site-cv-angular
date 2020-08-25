import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '' , component: HomePageComponent },
  { path: 'Home', component: HomePageComponent },
  { path: 'Contact', component: ContactPageComponent },
  { path: 'Blog', component: BlogPageComponent },
  { path: '**' , component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
