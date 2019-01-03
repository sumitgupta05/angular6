import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ContactService} from '../Service/contact.service'
import {Contact} from '../model/Contact.model'
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule   } from '@angular/forms';
import { AlertService, AuthenticationService } from '../Service';
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
  submitted = false;
  constructor(private _fb: FormBuilder,
    public http:  HttpClient, private _router: Router, 
    private _contactrService: ContactService,
    public _avRoute: ActivatedRoute,
    private alertService: AlertService
    ) {
    // if (this._avRoute.snapshot.params["id"]) {
    //     this.id = this._avRoute.snapshot.params["id"];
    // }
    
    this.getContactDetails();

     this.ContactForm = this._fb.group({
      Id: 0,
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      emailid: ['', [Validators.required]],
      about: ['', [Validators.required]]
  })
  }

    // convenience getter for easy access to form fields
    get f() { return this.ContactForm.controls; }

  getContactDetails() {
      this._contactrService.getContact().subscribe(
        (data: Contact[]) => {  
          this.contatList = data;  
        });  
  }

  save(){
    this.submitted = true;
      debugger
     if (this.ContactForm.invalid) {
      return;
      }

  if (this.title == "Create") {
      this._contactrService.createContactDetails(this.ContactForm.value)
          .subscribe((data) => {
            this.alertService.success("Contact Details save successfully.");
            this.getContactDetails();
            this.ContactForm.patchValue({Id:0,'name':"", 'lastName':"" ,'emailid':"",'mobile':"",'about':""})
          }, error => this.alertService.error(error))
  }
  else if (this.title == "Edit") {
      this._contactrService.updateContactDetails(this.ContactForm.value)
          .subscribe((data) => {
            this.alertService.success("Contact Details updated successfully.");
            this.getContactDetails();
            this.title = "Create"
            this.ContactForm.patchValue({Id:0,'name':"", 'lastName':"" ,'emailid':"",'mobile':"",'about':""})
          }, error =>  this.alertService.error(error)) 
         } 
  }

  delete(contactID) {
    var ans = confirm("Do you want to delete customer with Id: " + contactID);
    if (ans) {
        this._contactrService.deleteContactDetails(contactID).subscribe((data) => {
          this.alertService.success("Record deleted successfully.");
            this.getContactDetails();
        }, error => this.alertService.error(error)) 
    }
}

GetContactDetailById(Id)
{
    debugger;
    if (Id > 0) {
        this.title = "Edit";
        this._contactrService.getContactDetailsById(Id)
        .subscribe((resp) => {  
            this.ContactForm.patchValue({Id:resp.Id,'name':resp.name, 'lastName':resp.lastName ,'emailid':resp.emailId,'mobile':resp.mobile,'about':resp.about})
          } , error =>  this.alertService.error(error));
        
    }
}  

}
  
