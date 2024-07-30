import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeProductPageComponent } from './income-product-page.component';

describe('IncomeProductPageComponent', () => {
  let component: IncomeProductPageComponent;
  let fixture: ComponentFixture<IncomeProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeProductPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
