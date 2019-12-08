import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) {}

  /**
   * Get random activity
   * @param params - Filter
   */
  public getActivity(params: any): any {
    // TODO: Make a request
    return this.httpClient.get('https://www.boredapi.com/api/activity', {params});
  }
}
