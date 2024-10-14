import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../shared/services/form.service';
import { formModel } from '../../core/models/formModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '/src/styles/responsive.scss']
})
export class ContactComponent {
  public isLoading: boolean = false
  public contactForm!: FormGroup

  constructor(
    private http: HttpClient,
    private formService: FormService,
    private fb: FormBuilder,
  ) { 

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      acceptPrivacy: [false, Validators.requiredTrue],
    });
  }

  sendForm() {
    this.isLoading = true;
    const formValues = this.contactForm.value;

    // Mapeando os campos para enviar em português
    const dataToSend = {
      nome: formValues.name,
      email: formValues.email,
      mensagem: formValues.message,
      telefone: formValues.phone,
      'Aceitou o termo de privacidade?': formValues.acceptPrivacy ? 'sim' : 'não'
    };

    // Enviar o formulário com os campos mapeados
    this.submitForm(dataToSend);
  }

  submitForm(data: any) {
    this.http.post('https://getform.io/f/bzyloxpa', data).subscribe(
      response => {
        alert('Formulário enviado com sucesso!');
        this.isLoading = false;
      },
      error => {
        alert('Formulário enviado com sucesso!');
        console.error(error);
        this.isLoading = false;
      }
    );
  }
  }
