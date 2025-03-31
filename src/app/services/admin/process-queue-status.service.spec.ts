import { TestBed } from '@angular/core/testing';

import { ProcessQueueStatusService } from './process-queue-status.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProcessQueueStatusService', () => {
  let service: ProcessQueueStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProcessQueueStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
