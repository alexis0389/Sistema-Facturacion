import { TestBed } from '@angular/core/testing';

import { FirebaseathInterceptor } from './firebaseath.interceptor';

describe('FirebaseathInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FirebaseathInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FirebaseathInterceptor = TestBed.inject(FirebaseathInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
