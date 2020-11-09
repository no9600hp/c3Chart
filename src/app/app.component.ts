import { Component, OnInit } from '@angular/core'
import * as c3 from 'c3'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}
  title = 'c3ChartTutorial'
  ngOnInit() {
    this.createChart()
  }
  createChart() {
    var chart = c3.generate({
      bindto: '#timeseriesChart',
      data: {
        x: 'x',
        columns: [
          [
            'x',
            '2013-01-01',
            '2013-01-02',
            '2013-01-03',
            '2013-01-04',
            '2013-01-05',
            '2013-01-06'
          ],
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ]
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d'
          }
        }
      }
    })
  }
}
