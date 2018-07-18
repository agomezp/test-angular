import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: []
})
export class ProgressbarComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('renombrado') legend: string = 'Leyenda';
  @Input() percentage: number = 50;

  @Output() changeProgressBar: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log('Leyenda: ', this.legend);
    console.log('Percentage: ', this.percentage);
  }

  onChange (newValue: number) {

    if (newValue >= 100) {
      this.percentage = 100;
    } else if (newValue <= 0) {
      this.percentage = 0;
    } else {
      this.percentage = newValue;
    }

    this.txtProgress.nativeElement.value = this.percentage;

    this.changeProgressBar.emit(this.percentage);
  }

  changeValue( value: number ) {

    if (this.percentage >= 100 && value > 0) {
      this.percentage = 100;
      return;
    }

    if (this.percentage <= 0 && value < 0) {
      this.percentage = 0;
      return;
    }

    this.percentage += value;

    this.changeProgressBar.emit(this.percentage);

    this.txtProgress.nativeElement.focus();
  }
}
