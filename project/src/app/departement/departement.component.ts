import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';  
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';  


import { chart } from 'highcharts';
import * as Highchartss from 'highcharts';
  
var Highcharts = require("highcharts/highmaps.js");  
import { Options } from "highcharts";  
import { LinkedList } from 'angular-bootstrap-md/lib/free/utils';
var worldMap = require("@highcharts/map-collection/custom/world.geo.json");  





@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss']
})
export class DepartementComponent {
@ViewChild('usdChartTarget') usdChartTarget: ElementRef;
usdChart: typeof Highcharts = Highcharts;
usdRate = 0;
usd_url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=MIX93213R84R24Z9';


coinPrice:any[]=[];
coinName:any[]=[];
chart:any=[];
departments:any=[];
i:any
isHighcharts = typeof Highcharts === 'object';
Highcharts: typeof Highcharts = Highcharts;
chartConstructor = 'mapChart';
chartData = [
  { code3: 'ABW', z: 105 },
  { code3: 'AFG', z: 35530 },
];
chartOptions2 = {
  responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
}
chartData2 = [
  {
    label: 'Num Of Crypto',
    
  },
  
];

  chartOptions: Highcharts.Options = {};
  constructor(private http:HttpClient) { 
  }


  public options: any = {
    chart: {
       type: 'bar'
    },
    accessibility: {
        description: '',
    },
    title: {
       text: 'Number of cryptocurrencies worldwide from 2013 to February 2022'
    },
    subtitle: {
        text: 'Sources: Statstica'
    },
    xAxis: {
        categories: ['2013', '2014', '2015', '2016', '2017', 'MAR 2018', 'NOV 2019', 'FEB 2021', 'AUG 2021', 'NOV 2021', 'FEB 2022'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        min: 0,
       
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' Coins'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    series: [{
        data: [22, 168, 187, 214, 445, 552, 1500,1940, 2500, 3433] 
    }]
  }

  
  ngOnInit(): void {
    this.refreshList()
    this.chartOptions = {
      chart: {
        map: worldMap
      },
      title: {
        text: "Legality By Contry"
      },
      
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          alignTo: "spacingBox"
        }
      },
      legend: {
        enabled: true // la barre zar9A
      },
      colorAxis: {
        max:1,
        
      },
      series: [
        {
          type: "map",
          name: "crypto",
          states: {
            hover: {
              color: "#BADA55"
            },
            
            
            
          },
          
          dataLabels: {
            enabled: false, // asma2 dial duwaal
            format: "{point.name}",
            
          },
          allAreas: false,
          data: [
            ["fo", 0],
            ["um", 0],
            ["us", 0.5],
            ["jp", 0.5],
            ["sc", 0],
            ["in", 0.5],
            ["fr", 0.5],
            ["fm", 0],
            ["cn", 1],
            ["pt", 0.5],
            ["sw", 0],
            ["sh", 0],
            ["br", 0.5],
            ["ki", 0],
            ["ph", 0.5],
            ["mx", 0.5],
            ["es", 0.5],
            ["bu", 0],
            ["mv", 0],
            ["sp", 0],
            ["gb", 0.5],
            ["gr", 0.5],
            ["as", 0],
            ["dk", 0.5],
            ["gl", 0],
            ["gu", 0],
            ["mp", 0],
            ["pr", 0],
            ["vi", 0],
            ["ca", 0.5],
            ["st", 0],
            ["cv", 0],
            ["dm", 0],
            ["nl", 1],
            ["jm", 0.5],
            ["ws", 0],
            ["om", 0],
            ["vc", 0],
            ["tr", 0.5],
            ["bd", 1],
            ["lc", 0],
            ["nr", 0],
            ["no", 0.5],
            ["kn", 0],
            ["bh", 0],
            ["to", 0],
            ["fi", 0.5],
            ["id", 0.5],
            ["mu", 0.5],
            ["se", 0.5],
            ["tt", 0.5],
            ["my", 0.5],
            ["pa", 0],
            ["pw", 0],
            ["tv", 0],
            ["mh", 0],
            ["cl", 0.5],
            ["th", 0.5],
            ["gd", 0],
            ["ee", 0.5],
            ["ag", 0],
            ["tw", 0.5],
            ["bb", 0],
            ["it", 0.5],
            ["mt", 0.5],
            ["vu", 0],
            ["sg", 0.5],
            ["cy", 0.5],
            ["lk", 0],
            ["km", 0],
            ["fj", 0],
            ["ru", 0.5],
            ["va", 0],
            ["sm", 0],
            ["kz", 0],
            ["az", 0],
            ["tj", 0],
            ["ls", 0],
            ["uz", 0.5],
            ["ma", 1],
            ["co", 0.5],
            ["tl", 0],
            ["tz", 0.5],
            ["ar", 0.5],
            ["sa", 0.5],
            ["pk", 0.5],
            ["ye", 0],
            ["ae", 0.5],
            ["ke", 0],
            ["pe", 0],
            ["do", 0],
            ["ht", 0],
            ["pg", 0],
            ["ao", 0.5],
            ["kh", 0.5],
            ["vn", 0.5],
            ["mz", 0],
            ["cr", 0.5],
            ["bj", 0],
            ["ng", 0.5],
            ["ir", 0.5],
            ["sv", 0.5],
            ["sl", 0.5],
            ["gw", 0],
            ["hr", 0.5],
            ["bz", 0],
            ["za", 0.5],
            ["cf", 0.5],
            ["sd", 0],
            ["cd", 0],
            ["kw", 0],
            ["de", 0],
            ["be", 0.5],
            ["ie", 1],
            ["kp", 0],
            ["kr", 0.5],
            ["gy", 0],
            ["hn", 0],
            ["mm", 0],
            ["ga", 0],
            ["gq", 0],
            ["ni", 0.5],
            ["lv", 0],
            ["ug", 0],
            ["mw", 0],
            ["am", 0],
            ["sx", 0],
            ["tm", 0],
            ["zm", 0],
            ["nc", 0],
            ["mr", 0],
            ["dz", 1],
            ["lt", 0.5],
            ["et", 0],
            ["er", 0],
            ["gh", 0],
            ["si", 0],
            ["gt", 0],
            ["ba", 0.5],
            ["jo", 0.5],
            ["sy", 0],
            ["mc", 0],
            ["al", 0.5],
            ["uy", 0],
            ["cnm", 0],
            ["mn", 0],
            ["rw", 0],
            ["so", 0],
            ["bo", 1],
            ["cm", 0],
            ["cg", 0],
            ["eh", 0],
            ["rs", 0],
            ["me", 0],
            ["tg", 0],
            ["la", 0],
            ["af", 0],
            ["ua", 0.5],
            ["sk", 0.5],
            ["jk", 0],
            ["bg", 0.5],
            ["qa", 0.5],
            ["li", 0],
            ["at", 0.5],
            ["sz", 0],
            ["hu", 0.5],
            ["ro", 0.5],
            ["ne", 0],
            ["lu", 0.5],
            ["ad", 0],
            ["ci", 0],
            ["lr", 0],
            ["bn", 0.5],
            ["iq", 0],
            ["ge", 0.5],
            ["gm", 0],
            ["ch", 0.5],
            ["td", 0],
            ["kv", 0],
            ["lb", 0.5],
            ["dj", 0],
            ["bi", 0],
            ["sr", 0],
            ["il", 0.5],
            ["ml", 0],
            ["sn", 0],
            ["gn", 0],
            ["zw", 0],
            ["pl", 0.5],
            ["mk", 0.5],
            ["py", 0],
            ["by", 0.5],
            ["cz", 0.5],
            ["bf", 0],
            ["na", 0.5],
            ["ly", 0],
            ["tn", 0],
            ["bt", 0],
            ["md", 0],
            ["ss", 0],
            ["bw", 0],
            ["bs", 0],
            ["nz", 0.5],
            ["cu", 0],
            ["ec", 0.5],
            ["au", 0.5],
            ["ve", 0.5],
            ["sb", 0],
            ["mg", 0],
            ["is", 0.5],
            ["eg", 1],
            ["kg", 0.5],
            ["np", 1]
          ]
        }
      ]
    };
    setInterval(() => {
     

      this.http.get(this.usd_url).subscribe(response => {
        let data = response
        let value = data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
        value = +value;
        this.usdRate = value;        
        this.usdChart.series[0].yAxis.setExtremes(value-10, value+10,true);
        this.usdChart.series[0].addPoint(+value);
        console.log(JSON.stringify(data));
      })

    },
      500);
  Highcharts.chart('container2', this.options);
  }
  

  refreshList(){
    this.http.get<any>(environment.API_URL+'coins')
    .subscribe(data=> {
      this.departments=data;
      for( let i=0;i<48;i++){
        this.coinName[i]=this.departments[i].symbol
        this.coinPrice[i]=this.departments[i].coin_price
        console.log(this.coinName[i])
        }
        this.chart = new Chart('canvas',{
          type:'line',
          
          data:{
            labels: this.coinName, 
            
            datasets:[{
              label:'coin Price',
              data: this.coinPrice,
              
              borderWidth:3,
              fill:false,
              maxBarThickness: 10,
              minBarLength: 2
            }
            ]

          },
          // options:{
          //   scales:{
          //     xAxes:[{
          //       ticks:{
          //           display: true,
          //           autoSkip: true,
          //           maxTicksLimit: 4
          //       }
          //   }]
          //   }
          // }
        })
        
      console.log(this.departments)
    })
    
  }

  ngAfterViewInit() {
    

    const usdOptions: Highcharts.Options = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'USD'
      },
      xAxis: {
      },
      yAxis: {
        title: {
          text: 'Price'
        }
      },
      series: [{
        type:undefined,
        name: 'USD',
        data: []
      }]
    };


    this.usdChart = chart(this.usdChartTarget.nativeElement, usdOptions);
  }

  
}
