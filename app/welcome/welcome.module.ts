import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { WelcomePageRoutingModule } from "./welcome-routing.module";
import { MaterialModule } from "../material.module";
import { WelcomePage } from "./welcome.page";
import { NavigationbarModule } from "../Navigation/NavigationBar/navigationbar.module";
import {FindFriendsPageModule} from "../Signin/find-friends/find-friends.module"
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomePageRoutingModule,
    MaterialModule,
    NavigationbarModule,
    FindFriendsPageModule
  ],
  declarations: [WelcomePage],
})
export class WelcomePageModule {}
