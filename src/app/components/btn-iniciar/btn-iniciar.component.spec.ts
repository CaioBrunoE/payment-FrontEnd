import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnIniciarComponent } from './btn-iniciar.component';

describe('BtnIniciarComponent', () => {
  let component: BtnIniciarComponent;
  let fixture: ComponentFixture<BtnIniciarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnIniciarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnIniciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
