import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { from } from "rxjs";
import { HttpClientModule } from "@angular/common/http";
import { ConfigService } from "./config.service";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { RecaptchaModule } from "ng-recaptcha";
import { EllipsisPipe } from "../ellipsis.pipe";
import { SignupPageModule } from "./signup/signup.module";
import {
  NativeGeocoder,
  NativeGeocoderOptions,
} from "@ionic-native/native-geocoder/ngx";


@NgModule({
  declarations: [AppComponent, EllipsisPipe],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RecaptchaModule.forRoot(),
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
