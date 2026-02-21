import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentUpload } from './components/document-upload/document-upload';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DocumentUpload
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register implements OnInit {
  registrationForm!: FormGroup;
  ceebrainId = signal<string>('');
  showSuccess = signal(false);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ceebrainId.set(this.generateCeebrainId());

    this.registrationForm = this.fb.group({
      mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      dateOfBirth: ['', Validators.required],
      placeOfBirth: ['', Validators.required],
      identity: ['', Validators.required],
      gender: ['', Validators.required],
      bplCategory: ['', Validators.required],
      underprivilegedCategory: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[A-Z])(?=.*[0-9]).*$')
      ]],
      agreeToFramework: [false, Validators.requiredTrue]
    });
  }

  generateCeebrainId(): string {
    return Math.floor(100000000000 + Math.random() * 900000000000).toString();
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Data:', {
        ...this.registrationForm.value,
        ceebrainId: this.ceebrainId()
      });
      this.showSuccess.set(true);
      setTimeout(() => this.showSuccess.set(false), 5000);
    }
  }
}
