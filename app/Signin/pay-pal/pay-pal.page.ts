import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpHeaderResponse,
} from "@angular/common/http";
import { ConfigService } from "../../config.service"
declare let paypal: any
@Component({
  selector: 'app-pay-pal',
  templateUrl: './pay-pal.page.html',
  styleUrls: ['./pay-pal.page.scss'],
})

export class PayPalPage implements  AfterViewChecked {
constructor(public http: HttpClient){}
  // @ViewChild('myFormPost') myFormPost: ElementRef;
  addScript: boolean = false
  finalAmount: number = 1
  paypalLoad: boolean = false


  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'ARdZ3e5wAjiAibsWrlLUXxzip4dYAdsjH-gKJrvRhvhqW8qbVG5aPzB-1OrBDNC3KgghxLIYxpTA-t3t',
      production: '<insert production client id>'
    },
    commit: true,
    payment: (data, actions) => {

      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'USD' } }
          ]
        }
      });
    },

    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
this.test()
        //do something when payment is successfull


      })
    }
  };
  userDetail: any;
  uid: any;

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
      })
    }
  }
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js',
        scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement)

    })

  }
  test() {

    this.userDetail = JSON.parse(localStorage.getItem("currentUser"));
    this.uid = this.userDetail.user.uid;
    const headers = new HttpHeaders()
      .set("X-CSRF-Token", this.userDetail.token)
      .set("Content-Type", "application/json")
      .set(
        "X-Cookie",
        this.userDetail.session_name + "=" + this.userDetail.sessid
      );

    const requestOptions = {
      headers: headers,
      withCredentials: true,
    };
    this.http
      .put(
        "https://gowebtutorial.com/api/json/user/" + this.uid, {
        field_verfied:   { und: [
          {
            value: "true"
          }
        ]
      }
      }, requestOptions).subscribe((data) => {
        console.log(data)

      });
  }


}
