import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SigninPageRoutingModule } from "./signin-routing.module";
import { SigninPage } from "./signin.page";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MaterialModule } from "../material.module";
import { NavigationbarModule } from "../Navigation/NavigationBar/navigationbar.module";
import { SigninPipe } from '../signin.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninPageRoutingModule,
    MatTableModule,
    MatTabsModule,
    MaterialModule,
    NavigationbarModule,
   
  ],
  declarations: [SigninPage, SigninPipe],
})
export class SigninPageModule {}
