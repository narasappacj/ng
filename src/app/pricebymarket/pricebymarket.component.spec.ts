import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricebymarketComponent } from './pricebymarket.component';

describe('PricebymarketComponent', () => {
  let component: PricebymarketComponent;
  let fixture: ComponentFixture<PricebymarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricebymarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricebymarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
