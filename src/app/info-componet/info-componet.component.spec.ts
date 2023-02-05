import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComponetComponent } from './info-componet.component';

describe('InfoComponetComponent', () => {
  let component: InfoComponetComponent;
  let fixture: ComponentFixture<InfoComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoComponetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
