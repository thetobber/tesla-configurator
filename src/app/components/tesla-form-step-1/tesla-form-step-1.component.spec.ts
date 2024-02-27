import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeslaFormStep1Component } from './tesla-form-step-1.component';

describe('TeslaFormStep1Component', () => {
  let component: TeslaFormStep1Component;
  let fixture: ComponentFixture<TeslaFormStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeslaFormStep1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(TeslaFormStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
