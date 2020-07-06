import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoAxisChartComponent } from './auto-axis-chart.component';

describe('AutoAxisChartComponent', () => {
  let component: AutoAxisChartComponent;
  let fixture: ComponentFixture<AutoAxisChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoAxisChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoAxisChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
