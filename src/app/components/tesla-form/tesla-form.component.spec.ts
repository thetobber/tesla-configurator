import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaFormComponent } from './tesla-form.component';

describe('TeslaFormComponent', () => {
  let component: TeslaFormComponent;
  let fixture: ComponentFixture<TeslaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeslaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeslaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
