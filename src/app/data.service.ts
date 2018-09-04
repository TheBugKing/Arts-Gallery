import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Idata } from './dataInterface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url="http://localhost:3000/mydata";

  constructor(private http:HttpClient) {}

  getdata(): Observable <Idata[] >
  {
    return this.http.get<Idata[]>(this.url);

  }
 




}
