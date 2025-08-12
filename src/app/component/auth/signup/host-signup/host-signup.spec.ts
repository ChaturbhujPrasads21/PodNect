import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostSignup } from './host-signup';

describe('HostSignup', () => {
  let component: HostSignup;
  let fixture: ComponentFixture<HostSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostSignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostSignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
