import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Coins } from './customer';
import { LazyLoadEvent } from 'primeng/api';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  coinPrice:any[]=[];
  coinName:any[]=[];
  departments:any=[];
  i:any

  coins: Coins[];
  totalRecords: number;
  cols: any[];
  loading: boolean;
  selectAll: boolean = false;
  selectedCustomers: any[];



    constructor(private http:HttpClient) { 
    }
    
    ngOnInit(): void {
      this.refreshList()
      this.loading = true;

    }
    
  
    refreshList(){
      this.http.get<any>(environment.API_URL+'coins')
      .subscribe(data=> {
        this.departments=data;          
      })
      
    }



  





    
  
    
  }