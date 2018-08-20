import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPollotionComponent } from './air-pollotion.component';

describe('AirPollotionComponent', () => {
  let component: AirPollotionComponent;
  let fixture: ComponentFixture<AirPollotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirPollotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPollotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
