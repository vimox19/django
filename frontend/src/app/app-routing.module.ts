import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartementComponent } from './departement/departement.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'test',component:DepartementComponent},
  {path:'nav',component:NavbarComponent},
  {path:'news',component:NewsComponent},
  {path:'list',component:ListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
