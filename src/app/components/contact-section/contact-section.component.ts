import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {

  form: FormGroup;
  name: FormControl = new FormControl('',Validators.required);
  phone: FormControl = new FormControl('', [Validators.pattern('[- +()0-9]+')]);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  message: FormControl = new FormControl('',[Validators.required, Validators.minLength(4)]);
  honeypot: FormControl = new FormControl('');
  submitted: boolean = false;
  isLoading: boolean = false;
  responseMessage: string;
  constructor(private formBuilder:FormBuilder, private http:HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      phone: this.phone,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    })
  }





  ngOnInit(): void {

  }



}
