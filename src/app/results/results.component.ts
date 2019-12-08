import { Component, OnInit, Input, ViewChildren, ViewChild, ElementRef, QueryList, AfterViewInit } from '@angular/core';
// const _ = require('lodash');
import * as _ from 'lodash';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, AfterViewInit {
  activitiesArray;
  @Input() get activities() { return this.activitiesArray; }
  set activities(array: any) {
    if (!array || !(array.length > 0)) {
      // If the array input is empty, initialize activities array
      this.initActivities();
    } else {
      // Assign new activities
      this.activitiesArray = array;
    }

    setTimeout(() => {
      this.loadCards();
    }, 0);
  }
  @ViewChildren('activityCard', { read: ElementRef }) activityCards?: QueryList<ElementRef>;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loadCards();
    }, 0);
  }

  /**
   * Initialize activities array
   */
  initActivities() {
    this.activitiesArray = Array(1);
    _.fill(this.activitiesArray, 'Loading activity...');
  }

  /**
   * Load activity cards, set card inner HTML
   */
  loadCards() {
    const cards = this.activityCards.toArray();
    for (let i = 0; i < this.activities.length; i++) {
      cards[i].nativeElement.innerHTML = this.activities[i].activity || this.activities;
    }
  }

  /**
   * Open Modal to show detail of activity
   * @param activity - Activity object
   */
  openModal(activity) {
    // TODO: its end of sprint this is someone else's problem
    if (!!activity.activity) {
      const dialogRef = this.dialog.open(ModalComponent, {
        data: activity
      });
      dialogRef.afterClosed().subscribe(() => {
        console.log('The dialog was closed');
      });
    }
  }
}
