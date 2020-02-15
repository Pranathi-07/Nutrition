import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchTerm: string;
  public nutritionData: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {}

  getNutritionDetails() {
    if (!this.searchTerm) {
      alert('Enter an item to search');
    } else {
      // tslint:disable-next-line:max-line-length
    // http://api.nutritionix.com/v1_1/search/%E2%80%9Clays%E2%80%9D?results=0:1&fields=*&appId=5d374231&appKey=c3e48c1ceb0853f9692b853c95480339
      const url = `http://api.nutritionix.com/v1_1/search/${this.searchTerm}?results=0:1&fields=*&appId=5d374231&appKey=c3e48c1ceb0853f9692b853c95480339`;
      this.http.get(url).subscribe(result => {
        if (result['total_hits'] > 0) {
          this.nutritionData = result['hits'][0]['fields'];
          console.log(this.nutritionData);
        } else {
          alert('No results found');
        }
      });
    }
  }
  }


