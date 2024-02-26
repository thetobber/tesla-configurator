import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeslaFormStep3Component } from './tesla-form-step-3.component';

describe('SummaryStepComponent', () => {
  let component: TeslaFormStep3Component;
  let fixture: ComponentFixture<TeslaFormStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeslaFormStep3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(TeslaFormStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
