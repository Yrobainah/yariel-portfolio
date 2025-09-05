import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environments';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  submitting = false;
  sentOk: boolean | null = null;

  async onSubmit(form: NgForm) {
    if (form.invalid || this.submitting) return;

    this.submitting = true;
    this.sentOk = null;

    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          from_name: this.name,
          from_email: this.email,
          message: this.message,
        },
        { publicKey: environment.emailjs.publicKey }
      );

      this.sentOk = true;
      form.resetForm();
    } catch (err) {
      console.error('Error EmailJS:', err);
      this.sentOk = false;
    } finally {
      this.submitting = false;
    }
  }
}
