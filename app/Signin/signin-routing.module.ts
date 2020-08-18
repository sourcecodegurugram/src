import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninPage } from "./signin.page";

const routes: Routes = [

  {
    path: '',
    component: SigninPage
  },  {
    path: 'tophobbies',
    loadChildren: () => import('../Signin/tophobbies/tophobbies.module').then( m => m.TophobbiesPageModule)
  },
  {
    path: 'becomeverified',
    loadChildren: () => import('../Signin/becomeverified/becomeverified.module').then( m => m.BecomeverifiedPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('../Signin/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'trial-over',
    loadChildren: () => import('../Signin/trial-over/trial-over.module').then( m => m.TrialOverPageModule)
  },

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninPageRoutingModule {}
