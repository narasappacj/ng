import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadeDemoComponent } from './cascade-demo.component';

describe('CascadeDemoComponent', () => {
  let component: CascadeDemoComponent;
  let fixture: ComponentFixture<CascadeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CascadeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
