import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoHijoComponent } from './empleado-hijo.component';

describe('EmpleadoHijoComponent', () => {
  let component: EmpleadoHijoComponent;
  let fixture: ComponentFixture<EmpleadoHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
