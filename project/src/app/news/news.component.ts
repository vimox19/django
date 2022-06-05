import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ElasticsearchService } from '../elasticsearch.service';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  isConnected = false;

  constructor(private http:HttpClient,private es: ElasticsearchService, private cd: ChangeDetectorRef) {
    this.isConnected = false;
   }
  news:any=[];
  status: string = "";
  totalLength:any;
  page:number=1

  ngOnInit() {
    this.refreshList()
    this.es.isAvailable().then(() => {
      this.status = 'OK';
      this.isConnected = true;
    }, error => {
      this.status = 'ERROR';
      this.isConnected = false;
      console.error('Server is down', error);
    }).then(() => {
      this.cd.detectChanges();
    });
  }
  

  refreshList(){
    this.http.get<any>(environment.API_URL+'news')
    .subscribe(data=> {
      this.news=data;
      this.totalLength=this.news.length;
    })
  }

  

}
