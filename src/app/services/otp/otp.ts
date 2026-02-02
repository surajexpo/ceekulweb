import { Injectable, signal } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { map, delay, takeWhile, tap } from 'rxjs/operators';
import {
  OtpSendResponse,
  OtpVerifyResponse,
  ContactMethod
} from '../../pages/register/models/registration.models';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  // Timer signal for countdown display
  readonly remainingTime = signal<number>(0);
  readonly isTimerActive = signal<boolean>(false);

  private timerSubscription: { unsubscribe: () => void } | null = null;
  private mockOtp = '123456'; // Mock OTP for demo

  // Send OTP (mock implementation)
  sendOtp(contactMethod: ContactMethod, contactValue: string): Observable<OtpSendResponse> {
    // Simulate API delay
    return of({
      success: true,
      message: contactMethod === 'mobile'
        ? `OTP sent to ${this.maskMobile(contactValue)}`
        : `OTP sent to ${this.maskEmail(contactValue)}`,
      expiresIn: 120
    }).pipe(delay(1000));
  }

  // Verify OTP (mock implementation)
  verifyOtp(
    contactMethod: ContactMethod,
    contactValue: string,
    otp: string
  ): Observable<OtpVerifyResponse> {
    // Simulate API delay and verification
    const isValid = otp === this.mockOtp;

    return of({
      success: isValid,
      message: isValid ? 'OTP verified successfully' : 'Invalid OTP',
      temporaryToken: isValid ? this.generateTempToken() : ''
    }).pipe(delay(800));
  }

  // Start countdown timer
  startTimer(duration: number): void {
    this.stopTimer();
    this.remainingTime.set(duration);
    this.isTimerActive.set(true);

    let remaining = duration;
    this.timerSubscription = timer(0, 1000)
      .pipe(
        takeWhile(() => remaining > 0),
        tap(() => {
          remaining--;
          this.remainingTime.set(remaining);
        })
      )
      .subscribe({
        complete: () => {
          this.isTimerActive.set(false);
        }
      });
  }

  // Stop timer
  stopTimer(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
    this.isTimerActive.set(false);
  }

  // Format time for display (MM:SS)
  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  // Mask mobile number for display
  private maskMobile(mobile: string): string {
    if (mobile.length < 4) return mobile;
    return mobile.slice(0, 2) + '****' + mobile.slice(-2);
  }

  // Mask email for display
  private maskEmail(email: string): string {
    const [local, domain] = email.split('@');
    if (!domain) return email;
    const maskedLocal =
      local.length > 2
        ? local.slice(0, 2) + '***'
        : local;
    return `${maskedLocal}@${domain}`;
  }

  // Generate temporary token for session
  private generateTempToken(): string {
    return 'temp_' + Math.random().toString(36).substring(2, 15);
  }
}
