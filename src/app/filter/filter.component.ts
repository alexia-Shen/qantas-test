import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface FilterObject {
  minPrice: number;
  maxPrice: number;
  activityType: string;
}
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  activityTypes = [
    'relaxation',
    'recreation',
    'busywork',
    'music',
    'charity',
    'education'
  ];
  selectedType = '';
  minPrice = 0;
  maxPrice = 0;

  @Output() outOnSubmit = new EventEmitter<FilterObject>();
  constructor() { }

  /**
   * Send filter object with values to parent component
   */
  submitFilter() {
    const filter = {
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      activityType: this.selectedType
    };
    // Emit filter object
    this.outOnSubmit.emit(filter);
  }

  ngOnInit() {}
}
