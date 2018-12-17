import { Injectable } from '@angular/core';   
import { Contact } from '../model/Contact.model'
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({  
  providedIn: 'root'  
})  
export class ContactService {  
  
  constructor(private http: HttpClient) { }  
  baseUrl: string = 'https://localhost:44301/api/';  
  
  getContact() {  
    return this.http.get<Contact[]>(this.baseUrl+"Contact/GetContactDetails",httpOptions);  
  }  
  createContactDetails(contact: Contact) {  
    return this.http.post(this.baseUrl+"Contact/Create", contact);  
  }  
  getContactDetailsById(id: number) {  
    debugger
    return this.http.get<Contact>(this.baseUrl+"Contact/Details?id="+ id)
      .pipe(map(resp => {
        return resp;
      }))
  }

  updateContactDetails(employee: Contact) {  
    return this.http.put(this.baseUrl +"Contact/Edit/", employee);  
  }  
  deleteContactDetails(id: number) {  
    return this.http.delete<Contact[]>(this.baseUrl+"Contact/Delete?id=" + id);  
  }
}  