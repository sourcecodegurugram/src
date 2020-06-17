import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePage } from './welcome.page';
import {SignupPageModule} from '../signup/signup.module';

const routes: Routes = [
  {
    path: '',
    component: WelcomePage
  },
  {
    path: 'signin',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomePageRoutingModule {}
