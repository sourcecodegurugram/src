import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LivechatWidgetModule } from '@livechat/angular-widget'
import{NavigationbarComponent} from './navigationbar/navigationbar.component';
  import { from } from 'rxjs';
  import { HttpClientModule } from '@angular/common/http';
  import {ConfigService} from './config.service'
@NgModule({
  
  declarations: [AppComponent,NavigationbarComponent],
  entryComponents: [],
  imports: [BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
     LivechatWidgetModule,
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
