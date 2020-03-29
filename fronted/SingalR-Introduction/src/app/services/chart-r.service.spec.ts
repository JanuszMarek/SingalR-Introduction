import { TestBed } from '@angular/core/testing';

import { ChartRService } from './chart-r.service';

describe('SignalRService', () => {
  let service: ChartRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
