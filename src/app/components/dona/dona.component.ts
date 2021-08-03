import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { Colors, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  @Input() title: String = 'Sin título';
  @Input('labels') doughnutChartLabels: Label[] = ['label1', 'label2', 'label3']
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  colors: Colors[] = [
    { backgroundColor: ['#9E120E', '#FF5800', '#FFB414']}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
