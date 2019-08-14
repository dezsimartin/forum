import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private  postRoot : string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient : HttpClient) { }

  public getAll(): Observable<any>{
    return this.httpClient
      .get(this.postRoot);
  }
}
