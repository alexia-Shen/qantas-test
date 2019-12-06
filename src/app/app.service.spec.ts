import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });
});
