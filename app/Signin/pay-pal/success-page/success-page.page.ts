import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.page.html',
  styleUrls: ['./success-page.page.scss'],
})
export class SuccessPagePage implements OnInit {
  new: any;
  Amount: any;
  Time: any;
  OrderId: any;
  Endate :any
  constructor() { }

  ngOnInit() {
     this.new = JSON.parse(localStorage.getItem("payment"));
     this.Amount = this.new.transactions[0].amount.total
     this.Time = this.new.create_time
     this.OrderId  = this.new.id 

      

    

this.addyear()

  }


  addyear()
  {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    if(this.Amount == 19.99)
    {
      var c = new Date(year + 1, month, day);
      this.Endate = c 
    }
    else
    {
      var c = new Date(year, month + 1, day);
      this.Endate = c 
    }

   
  }
}
