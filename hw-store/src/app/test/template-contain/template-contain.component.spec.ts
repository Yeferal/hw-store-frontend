import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateContainComponent } from './template-contain.component';

describe('TemplateContainComponent', () => {
  let component: TemplateContainComponent;
  let fixture: ComponentFixture<TemplateContainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateContainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateContainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
