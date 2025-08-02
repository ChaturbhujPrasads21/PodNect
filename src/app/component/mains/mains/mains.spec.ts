import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mains } from './mains';

describe('Mains', () => {
  let component: Mains;
  let fixture: ComponentFixture<Mains>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mains]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mains);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
