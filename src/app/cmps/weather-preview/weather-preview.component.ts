import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weather-preview',
  templateUrl: './weather-preview.component.html',
  styleUrls: ['./weather-preview.component.scss']
})
export class WeatherPreviewComponent implements OnInit {
@Input() day:any
dayIcon:string
  constructor() { }

  ngOnInit(): void {
    this.dayIcon = (this.day.Day.Icon < 10) ? '0' + (this.day.Day.Icon) : this.day.Day.Icon;
  }

}
