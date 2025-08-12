import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesSignup } from './agencies-signup';

describe('AgenciesSignup', () => {
  let component: AgenciesSignup;
  let fixture: ComponentFixture<AgenciesSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenciesSignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenciesSignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
