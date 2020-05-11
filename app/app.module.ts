import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavigationbarComponent } from "./navigationbar/navigationbar.component";
import { from } from "rxjs";
import { HttpClientModule } from "@angular/common/http";
import { ConfigService } from "./config.service";
import { Geolocation } from "@ionic-native/geolocation/ngx";

import { EllipsisPipe } from "../ellipsis.pipe";

@NgModule({
  declarations: [AppComponent, NavigationbarComponent, EllipsisPipe],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
