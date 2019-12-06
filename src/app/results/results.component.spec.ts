import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsComponent } from './results.component';
import { MatCardModule, MatDialog } from '@angular/material';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsComponent ],
      imports: [MatCardModule],
      providers: [{provide: MatDialog, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
