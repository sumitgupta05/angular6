import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ContactService} from '../Service/contact.service'
import {Contact} from '../model/Contact.model'
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { FormsModule,NgForm, FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule   } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent  {
  public contatList;

  ContactForm: FormGroup;
  id: number;
  errorMessage: any;
  title: string = "Create";
  

  constructor(private _fb: FormBuilder,public http:  HttpClient, private _router: Router, private _contactrService: ContactService) {
     this.getContactDetails();

     this.ContactForm = this._fb.group({
      id: 0,
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      emailid: ['', [Validators.required]],
      about: ['', [Validators.required]]
  })
  }

  getContactDetails() {
      this._contactrService.getContact().subscribe(
        (data: Contact[]) => {  
          this.contatList = data;  
        });  
      //     data => this.contatList = data
      // )
  }

  save(){
  //   if (!this._contactrService.valid) {
  //     return;
  // }
debugger;
  if (this.title == "Create") {
      this._contactrService.createContactDetails(this.ContactForm.value)
          .subscribe((data) => {
              this._router.navigate(['/fetch-employee']);
          }, error => this.errorMessage = error)
  }
  else if (this.title == "Edit") {
      this._contactrService.updateContactDetails(this.ContactForm.value)
          .subscribe((data) => {
              this._router.navigate(['/fetch-employee']);
          }, error => this.errorMessage = error) 
  }
  }

  
}
  
