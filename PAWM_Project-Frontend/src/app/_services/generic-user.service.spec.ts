import { TestBed } from '@angular/core/testing';

import { GenericUserService } from './generic-user.service';

describe('GenericUserService', () => {
  let service: GenericUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
