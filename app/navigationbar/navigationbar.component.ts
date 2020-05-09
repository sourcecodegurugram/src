import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service'
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import { config } from '../config';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss'],
})
export class NavigationbarComponent implements OnInit {
  crossSign:boolean = false;
  humBurger:boolean = true;
  mainMenu:boolean =false;
  mainMenuItem :boolean = true;
  blogs: Blog[];
  config: config;
  public id: string = null;
  private sub: any;
  post: Object;
  constructor(private Configservice: ConfigService,
    private blogService: BlogService,
              private route: ActivatedRoute,
              private router: Router) { }
 
  ngOnInit() {
    // this.Configservice.getArticle()
    //   .subscribe(data => {
    //     this.post = data;
    //    console.log(data)
    //   });

  }




  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  humburgereffect()
  {
    this.crossSign = true;
    this.humBurger = false;
    this.mainMenu = true;
  }
  humBurgerCross()
  {
    this.crossSign = false;
    this.humBurger = true;
    this.mainMenu =false;
  }
  itemclick()
  {
    this.mainMenu = false; 
    this.crossSign = false;
    this.humBurger = true;
  }
}
