/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActionLogService } from './action-log.service';

describe('ActionLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActionLogService]
    });
  });

  it('should ...', inject([ActionLogService], (service: ActionLogService) => {
    expect(service).toBeTruthy();
  }));
});
