import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ElasticsearchService } from './elasticsearch.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DepartementComponent } from './departement/departement.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NewsComponent } from './news/news.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {MatButtonModule} from '@angular/material/button';
import { SearchComponent } from './search/search.component'; 
import { HighchartsChartModule } from 'highcharts-angular';
import { ListComponent } from './list/list.component';




import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartementComponent,
    NavbarComponent,
    NewsComponent,
    SearchComponent,
    ListComponent,
  ],
  imports: [
    HighchartsChartModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    NgxPaginationModule,
    MatButtonModule,TableModule,ToastModule,CalendarModule,SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    BrowserAnimationsModule,

  ],
  providers: [ElasticsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
