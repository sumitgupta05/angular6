import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ContactService} from '../Service/contact.service'
import {Contact} from '../model/Contact.model'
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

   public contatList;

  constructor(public http:  HttpClient, private _router: Router, private _contactrService: ContactService) {
     this.getContactDetails();
  }

  getContactDetails() {
      this._contactrService.getContact().subscribe(
        (data: Contact[]) => {  
          this.contatList = data;  
        });  
      //     data => this.contatList = data
      // )
  }

  
}
  
