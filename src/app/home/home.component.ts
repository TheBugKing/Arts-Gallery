import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public url=[];
  constructor(private http:HttpClient, private dataservice:DataService) { }

  ngOnInit() {
    this.dataservice.getdata().subscribe(data=> this.url = data);
  }

}
