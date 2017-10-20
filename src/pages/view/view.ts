import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-view',
  templateUrl: 'view.html'
})
export class ViewPage {




    constructor(public navCtrl: NavController) {

    }

    // Doughnut data
  public doughnutChartLabels:string[] = ['Can', 'Box/Dry', 'Jar', 'Bag'];
  public doughnutChartData:number[] = [350, 450, 100, 700];
  public doughnutChartType:string = 'doughnut';

  // Chart events
  public chartClicked(e:any):void {
    console.log(e);
  }

  // Chart events
  public chartHovered(e:any):void {
    console.log(e);
  }






}
