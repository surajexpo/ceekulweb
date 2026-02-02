import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StepIndicator } from './components/step-indicator/step-indicator';
import { OtpInput } from './components/otp-input/otp-input';
import { PasswordInput } from './components/password-input/password-input';
import { DocumentUpload } from './components/document-upload/document-upload';
import {
  ContactMethod,
  Gender,
  IdentityType,
  RegistrationState,
  StepOneData,
  StepTwoData,
  OtpState,
  RegistrationErrors
} from './models/registration.models';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    FormsModule,
    StepIndicator,
    OtpInput,
    PasswordInput,
    DocumentUpload
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  readonly currentStep = signal<1 | 2>(1);
  readonly isSubmitting = signal(false);

  readonly stepOneData = signal<StepOneData>({
    contactMethod: 'mobile',
    contactValue: '',
    otp: '',
    password: '',
    confirmPassword: ''
  });

  readonly stepTwoData = signal<StepTwoData>({
    fullName: '',
    dateOfBirth: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      pincode: '',
      country: 'India'
    },
    gender: null,
    identityType: null,
    identityNumber: '',
    belowPovertyLine: null,
    underprivilegedCategory: null,
    candidateId: '',
    documentUploads: [],
    videoVerificationWatched: false
  });

  readonly otpState = signal<OtpState>({
    sent: false,
    verified: false,
    expiresAt: null,
    remainingAttempts: 3,
    resendCooldown: 0
  });

  readonly errors = signal<RegistrationErrors>({
    stepOne: {},
    stepTwo: {},
    general: null
  });

  updateContactMethod(method: ContactMethod): void {
    this.stepOneData.update(data => ({ ...data, contactMethod: method, contactValue: '' }));
  }

  updateContactValue(value: string): void {
    this.stepOneData.update(data => ({ ...data, contactValue: value }));
  }

  sendOtp(): void {
    // TODO: Implement OTP sending
    console.log('Sending OTP to:', this.stepOneData().contactValue);
    this.otpState.update(state => ({ ...state, sent: true }));
  }

  onOtpComplete(otp: string): void {
    this.stepOneData.update(data => ({ ...data, otp }));
  }

  onPasswordChange(password: string): void {
    this.stepOneData.update(data => ({ ...data, password }));
  }

  onConfirmPasswordChange(confirmPassword: string): void {
    this.stepOneData.update(data => ({ ...data, confirmPassword }));
  }

  nextStep(): void {
    if (this.currentStep() === 1) {
      this.currentStep.set(2);
    }
  }

  previousStep(): void {
    if (this.currentStep() === 2) {
      this.currentStep.set(1);
    }
  }

  submitRegistration(): void {
    this.isSubmitting.set(true);
    // TODO: Implement registration submission
    console.log('Submitting registration:', {
      stepOne: this.stepOneData(),
      stepTwo: this.stepTwoData()
    });
  }
}
