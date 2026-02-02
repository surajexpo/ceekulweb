import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  // Generate unique candidate ID (mock implementation)
  generateCandidateId(): Observable<{ candidateId: string }> {
    const candidateId = this.generateLocalCandidateId();
    return of({ candidateId }).pipe(delay(500));
  }

  // Generate client-side ID for demo mode
  generateLocalCandidateId(): string {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `CK-${timestamp}-${random}`;
  }
}
