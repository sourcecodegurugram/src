import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPage } from './register.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: RegisterPage,
    children:[
        { path: 'searchTab', loadChildren: '../searchTab/searchTab.module#SearchTabPageModule' },
        { path: 'tabs2', loadChildren: '../tabs2/tabs2.module#Tabs2PageModule' },
        { path: 'tabs3', loadChildren: '../tabs3/tabs3.module#Tabs3PageModule' }
    ]
  },
  {
    path: '',
    component: RegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
