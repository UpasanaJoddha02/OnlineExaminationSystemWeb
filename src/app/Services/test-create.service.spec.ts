import { TestBed } from '@angular/core/testing';

import { TestCreateService } from './test-create.service';

describe('TestCreateService', () => {
  let service: TestCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
