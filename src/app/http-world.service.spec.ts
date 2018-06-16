import { TestBed, inject } from '@angular/core/testing';

import { HttpWorldService } from './http-world.service';

describe('HttpWorldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpWorldService]
    });
  });

  it('should be created', inject([HttpWorldService], (service: HttpWorldService) => {
    expect(service).toBeTruthy();
  }));
});
