import { Component, OnInit } from '@angular/core';
import { single } from './data';
import { cities } from './dataCities';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  single: any[];
  cities: any[];
  view: any[] = [600, 300];

  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Requests';
  showYAxisLabel = true;
  yAxisLabel = 'City';

  colorScheme = {
    domain: ['#0B1C48', '#E66912', '#9E3A14']
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    Object.assign(this, { single });
    Object.assign(this, { cities });
  }

  openWarehouse(id){
    this.router.navigate(["../warehouse"]);

  }




  ngOnInit(){

  }
}
