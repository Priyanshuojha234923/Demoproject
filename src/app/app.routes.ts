import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [{
    path:"home",component:HomeComponent},
   { path:"login",component:LoginComponent},
   {path:"contactus",component:ContactusComponent},
   {path:"about",component:AboutComponent},
   {path:"registration",component:RegistrationComponent}


];
