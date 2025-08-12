import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSignup } from './guest-signup';

describe('GuestSignup', () => {
  let component: GuestSignup;
  let fixture: ComponentFixture<GuestSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestSignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestSignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
