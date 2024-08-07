import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleFinalizeListComponent } from './sale-finalize-list.component';

describe('SaleFinalizeListComponent', () => {
  let component: SaleFinalizeListComponent;
  let fixture: ComponentFixture<SaleFinalizeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleFinalizeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleFinalizeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
