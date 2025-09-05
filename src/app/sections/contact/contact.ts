import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  name: string = '';
  email: string = '';
  message: string = '';

  private readonly serviceId = 'service_t0nz37m';
  private readonly templateId = 'template_g2yf3e8';
  private readonly publicKey = 'zVZTyz2-P2bl1Pkr-';

  submitting = false;
  sentOk: boolean | null = null;

  constructor() {
    emailjs.init({ publicKey: this.publicKey });
  }

  async onSubmit(form: NgForm) {
    if (form.invalid || this.submitting) return;

    this.submitting = true;
    this.sentOk = null;

    try {
      await emailjs.send(this.serviceId, this.templateId, {
        from_name: this.name,
        from_email: this.email,
        message: this.message,
      });

      this.sentOk = true;
      form.resetForm(); // limpia el formulario
    } catch (err) {
      console.error('EmailJS error:', err);
      this.sentOk = false;
    } finally {
      this.submitting = false;
    }
  }
}
