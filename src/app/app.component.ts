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
        json: {
          data1: data[0].close,
          data2: data[1].close
        }
      }
    })
  }
}
