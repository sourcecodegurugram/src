import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

var app
@Component({
  selector: 'app-no-result-found',
  templateUrl: './no-result-found.page.html',
  styleUrls: ['./no-result-found.page.scss'],
})
export class NoResultFoundPage implements OnInit {

  constructor(private emailComposer: EmailComposer) { }

  ngOnInit() {
  }
email()
{
  this.emailComposer.getClients().then((apps: []) => {
    // Returns an array of configured email clients for the device
 });
 
 this.emailComposer.hasClient().then(app, (isValid: boolean) => {
  if (isValid) {
    // Now we know we have a valid email client configured
    // Not specifying an app will return true if at least one email client is configured
  }
 });
 
 this.emailComposer.hasAccount().then((isValid: boolean) => {
  if (isValid) {
    // Now we know we have a valid email account configured
  }
 });
 
 this.emailComposer.isAvailable().then(app, (available: boolean) => {
  if(available) {
    // Now we know we can send an email, calls hasClient and hasAccount
    // Not specifying an app will return true if at least one email client is configured
  }
 });
 
 let email = {
   to: 'ritin.nijhawan@gmail.com',
   cc: 'ritin.nijhawan7838@gmail.com',

   attachments: [
     'file://img/logo.png',
     'res://icon.png',
     'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
     'file://README.pdf'
   ],
   subject: 'Cordova Icons',
   body: 'How are you? Nice greetings from Leipzig',
   isHtml: true
 }
 
 // Send a text message using default options
 this.emailComposer.open(email);
}

}
