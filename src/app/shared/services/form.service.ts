import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { formModel } from '../../core/models/formModel';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private formUrl = 'https://getform.io/f/bzyloxpa'; 

  constructor(private http: HttpClient) {}

  sendForm(formData: FormData): Observable<any> {
    return this.http.post(this.formUrl, formData, { responseType: 'text' });
  }
}
