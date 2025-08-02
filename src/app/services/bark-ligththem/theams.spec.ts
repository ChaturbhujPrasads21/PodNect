import { TestBed } from '@angular/core/testing';

import { Theams } from './theams';

describe('Theams', () => {
  let service: Theams;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Theams);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
