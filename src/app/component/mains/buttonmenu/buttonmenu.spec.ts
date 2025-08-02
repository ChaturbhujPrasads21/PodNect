import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttonmenu } from './buttonmenu';

describe('Buttonmenu', () => {
  let component: Buttonmenu;
  let fixture: ComponentFixture<Buttonmenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buttonmenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buttonmenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
