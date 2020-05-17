import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ConfigService } from "../config.service";
import { element } from "protractor";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.page.html",
  styleUrls: ["./search-result.page.scss"],
})
export class SearchResultPage implements OnInit {
  sub: any;
  post: any;
  searchResponse = [];
  pageIndex = 0;
  currPage = [];

  constructor(
    private _Activatedroute: ActivatedRoute,
    private ConfigService: ConfigService
  ) {}

  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.post = params.get("post");
    });
    this.getSearchData();
  }

  getSearchData() {
    this.ConfigService.getPostal(this.post, this.pageIndex).subscribe(
      (elements) => {
        this.currPage = Object.keys(elements).map((i) => elements[i]);

        console.log(this.currPage);
        this.searchResponse = this.searchResponse.concat(this.currPage);
        console.log(this.searchResponse);
      }
    );
    this.pageIndex++;
  }
}
