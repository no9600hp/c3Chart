import { Component, OnInit } from '@angular/core'
import * as c3 from 'c3'
import * as data from '../data.json'

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
    console.log(data)
  }
  createChart() {
    let jsonData = data
    var chart = c3.generate({
      bindto: '#timeseriesChart',
      data: {
        x: 'x',
        json: {
          x: [
            'Day 1',
            'Day 2',
            'Day 3',
            'Day 4',
            'Election Day',
            'Day 6',
            'Day 7',
            'Day 8',
            'Day 9'
          ],
          2020: data[0].close,
          2016: data[1].close,
          2012: data[2].close,
          2008: data[3].close,
          2004: data[4].close
        }
      },

      axis: {
        x: {
          type: 'category'
        }
      },
      grid: {
        x: {
          lines: [{ value: 4, text: 'Election Day', position: 'middle' }]
        }
      }
    })
  }
}
