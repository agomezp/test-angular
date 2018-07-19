import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() legendDona: string;
  @Input() dataDona: number[];
  @Input() labelsDona: string[];
  @Input() chartTypeDona: string;

  constructor() { }

  ngOnInit() {
  }

}
