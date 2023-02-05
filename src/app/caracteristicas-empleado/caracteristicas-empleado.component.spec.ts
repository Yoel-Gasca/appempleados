import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado.component';

describe('CaracteristicasEmpleadoComponent', () => {
  let component: CaracteristicasEmpleadoComponent;
  let fixture: ComponentFixture<CaracteristicasEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicasEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicasEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
