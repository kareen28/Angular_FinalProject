import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '',pathMatch: 'full', redirectTo: 'home'},
  {
  path: 'home',
  component:HomeComponent
  },
  {
  path: 'catalog' ,
  component:CatalogComponent
  },
  {
  path:'about',
  component:AboutComponent
  },
  {
  path:'profile',
  component:ProfileComponent,
  children:[
    {
      path:'', pathMatch:'full', redirectTo:'login'
    },
    {
      path:'login',
      component: LoginComponent
    },
    {
      path:'register',
      component: RegisterComponent
    },
    {
      path:'user',
      component: UserDetailsComponent
    }
  ]
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
