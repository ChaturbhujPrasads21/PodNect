import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BothSignup } from './both-signup';

describe('BothSignup', () => {
  let component: BothSignup;
  let fixture: ComponentFixture<BothSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BothSignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BothSignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
