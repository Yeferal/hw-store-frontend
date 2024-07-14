import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSpinnerComponent } from './load-spinner.component';

describe('LoadSpinnerComponent', () => {
  let component: LoadSpinnerComponent;
  let fixture: ComponentFixture<LoadSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadSpinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
