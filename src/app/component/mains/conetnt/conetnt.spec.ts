import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conetnt } from './conetnt';

describe('Conetnt', () => {
  let component: Conetnt;
  let fixture: ComponentFixture<Conetnt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conetnt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conetnt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
