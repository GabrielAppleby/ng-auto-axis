import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnprojectedComponent } from './unprojected.component';

describe('UnprojectedComponent', () => {
  let component: UnprojectedComponent;
  let fixture: ComponentFixture<UnprojectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnprojectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnprojectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
