import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  FormData: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      Comment: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(FormData) {
    console.log(FormData);
    this.contact.PostMessage(FormData);
    
  }
}
