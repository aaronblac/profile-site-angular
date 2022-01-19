import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {


  disabledSubmitButton: boolean = true;
  // optionsSelect: Array<any>;

  FormData: FormGroup;
  @HostListener('input') oninput() {

    if (this.FormData.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private builder:FormBuilder, private contactService: ContactService) {

    this.FormData = this.builder.group({
      name: new FormControl('',Validators.required),
      phone: new FormControl('', [Validators.pattern('[- +()0-9]+')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('',[Validators.required, Validators.minLength(4)]),
      honeypot: new FormControl('')
    })
  }

  onSubmit() {
    this.contactService.sendMessage(this.FormData.value).subscribe(() => {
      alert('Your message has been sent.');
      this.FormData.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }

  ngOnInit(): void {

  }

}

