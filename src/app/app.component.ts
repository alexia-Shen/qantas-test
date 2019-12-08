import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, empty } from 'rxjs';
import { expand, toArray } from 'rxjs/operators';
import { AppService } from './app.service';
import { FilterObject } from './filter/filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activities: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  constructor(private service: AppService) { }
  title = 'qantas-frontend-test';

  /**
   * Fetch 5 ativities with filters
   * @param params - Filter object
   */
  getActivity(params: FilterObject) {
    const results = [];
    // Clear previous results
    this.activities.next(results);

    const activity$ = this.service.getActivity(params);
    activity$.pipe(
      expand((result) => {
        // If the random activity has not added before AND the activity price is in range, push to results
        if (this.isSameExists(results, result) === false && this.isPriceInRange(result, params.minPrice, params.maxPrice)) {
          results.push(result);
        }

        // If number of results is great equal than 5, stop repeat
        // Otherwise, repeat fetching random activity
        return results.length < 5 ? activity$ : empty();
      }),
      toArray()
    ).subscribe(() => {
      this.activities.next(results);
    });
  }

  /**
   * Check if the new activity is duplicated in array
   * @param array - Activity Array
   * @param newObject - Newly fetched activity object
   * @returns - return boolean result
   */
  private isSameExists(array, newObject): boolean {
    return array.some(o => o.activity === newObject.activity
      && o.accessability === newObject.accessability
      && o.type === newObject.type
      && o.participants === newObject.participants
      && o.price === newObject.price
      && o.link === newObject.link
      && o.key === newObject.key
    );
  }

  /**
   * Check if the activity price is in range
   * @param activity - Activity Array
   * @param minPrice - Minimum price
   * @param maxPrice - Maximum price
   */
  isPriceInRange(activity, minPrice: number, maxPrice: number): boolean {
    if (!(minPrice > 0) && !(maxPrice > 0)) {
      return true;
    }
    return activity.price > minPrice && activity.price < maxPrice;
  }
}
