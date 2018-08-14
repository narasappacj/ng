import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandiPriceComponent } from './mandi-price.component';

describe('MandiPriceComponent', () => {
  let component: MandiPriceComponent;
  let fixture: ComponentFixture<MandiPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandiPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandiPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
