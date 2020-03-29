import { TestBed } from '@angular/core/testing';

import { MessageRService } from './message-r.service';

describe('MessageRService', () => {
  let service: MessageRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
