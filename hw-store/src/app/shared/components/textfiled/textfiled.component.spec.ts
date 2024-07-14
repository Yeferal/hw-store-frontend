import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfiledComponent } from './textfiled.component';

describe('TextfiledComponent', () => {
  let component: TextfiledComponent;
  let fixture: ComponentFixture<TextfiledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextfiledComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextfiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
