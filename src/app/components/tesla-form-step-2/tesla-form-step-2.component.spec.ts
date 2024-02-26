import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeslaFormStep2Component } from './tesla-form-step-2.component';

describe('ConfigStepComponent', () => {
  let component: TeslaFormStep2Component;
  let fixture: ComponentFixture<TeslaFormStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeslaFormStep2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(TeslaFormStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
