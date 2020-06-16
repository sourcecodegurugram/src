import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { IonicModule } from "@ionic/angular";
import { MaterialModule } from "../material.module";
import { SignupPageRoutingModule } from "./signup-routing.module";
import { NavBarPage } from "../nav-bar/nav-bar.page";
import { SignupPage } from "./signup.page";
import { NavigationbarModule } from "../navigationbar/navigationbar.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    MaterialModule,
    MatTableModule,
    MatTabsModule,
    NavigationbarModule,
  ],
  declarations: [SignupPage, NavBarPage],
})
export class SignupPageModule {}
