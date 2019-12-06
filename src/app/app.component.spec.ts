import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { ResultsComponent } from './results/results.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AppService } from './app.service';
import { MatSliderModule, MatSelectModule, MatCardModule, MatListModule, MatDialogModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        MatSliderModule,
        MatSelectModule,
        MatCardModule,
        MatListModule,
        MatDialogModule
      ],
      declarations: [
        AppComponent,
        FilterComponent,
        ResultsComponent
      ],
      providers: [HttpClient, HttpHandler, AppService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'qantas-frontend-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('qantas-frontend-test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('qantas-frontend-test app is running!');
  });
});
