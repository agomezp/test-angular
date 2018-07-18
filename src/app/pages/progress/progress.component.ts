import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  percentage1: number = 25;
  percentage2: number = 75;

  constructor() { }

  ngOnInit() {
  }

  updateProgressBar (event: number) {
    console.log(event);
    this.percentage1 = event;
  }
}
