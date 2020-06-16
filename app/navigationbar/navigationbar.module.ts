import { NgModule } from "@angular/core";
import { NavigationbarComponent } from "./navigationbar.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { MaterialModule } from "../material.module";

@NgModule({
  declarations: [NavigationbarComponent],
  exports: [NavigationbarComponent],
  imports: [CommonModule, FormsModule, IonicModule, MaterialModule],
})
export class NavigationbarModule {}
