import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  // news api url
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=565f3639303849adab1e8f1e6053c7d9";

  //tech news api url
  technewsapiurl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=565f3639303849adab1e8f1e6053c7d9";

  //business news api url
  businessnewsapiurl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=565f3639303849adab1e8f1e6053c7d9";
 // health new api url
 healthnewsapiurl = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=565f3639303849adab1e8f1e6053c7d9";



  // topheading()
   topHeading():Observable<any>
   {
   return this._http.get(this.newsApiUrl) ;

   }

  //tech news
   TechNews():Observable<any>
   {
     return this._http.get(this.technewsapiurl);
   }

   //businessnews
   businessNews():Observable<any>
   {
     return this._http.get(this.businessnewsapiurl);
   }

   //health news
   healthNews():Observable<any>
   {
     return this._http.get(this.healthnewsapiurl);
   }



}
