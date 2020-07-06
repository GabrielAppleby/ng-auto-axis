import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPointsComponent } from './control-points.component';

describe('ControlPointsComponent', () => {
  let component: ControlPointsComponent;
  let fixture: ComponentFixture<ControlPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
