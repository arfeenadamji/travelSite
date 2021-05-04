import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'userLoggedIn/:id', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'home/:id', component: HomeComponent},
  {path: 'pages/:id', component: PageComponent},
  {path: 'login', component: LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
