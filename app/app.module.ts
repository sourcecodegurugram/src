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
import { RecaptchaModule } from 'ng-recaptcha';
import { EllipsisPipe } from "../ellipsis.pipe";
import {SignupPageModule} from './signup/signup.module'
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { IonicStorageModule } from '@ionic/storage';
import { Keyboard } from '@ionic-native/keyboard/ngx';



@NgModule({
  declarations: [AppComponent, NavigationbarComponent, EllipsisPipe],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RecaptchaModule.forRoot(),
    IonicStorageModule.forRoot(),
  

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,NativeGeocoder,
    Keyboard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
