import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {


  contactForm: FormGroup;

  subjectCtrl: FormControl;
  senderCtrl: FormControl;
  messageCtrl: FormControl;

 constructor(private fb: FormBuilder) {

  this.subjectCtrl = fb.control("", [Validators.required, Validators.minLength(3)]);
  this.senderCtrl = fb.control("", [Validators.required, Validators.email]);
  this.messageCtrl = fb.control("", [Validators.required, Validators.minLength(10)]);


    this.contactForm = this.fb.group({
      subject:this.subjectCtrl,
      sender: this.senderCtrl,
      message: this.messageCtrl
    });
  }

  saveContactMessage()
  {
   console.log(this.contactForm.value); 
  }
}
