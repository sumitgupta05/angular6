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
 
  deleteContactDetails(id: number) {  
    return this.http.delete<Contact[]>(this.baseUrl+"Contact/GetContactDetails/" + id);  
  }  
  createContactDetails(employee: Contact) {  
    return this.http.post(this.baseUrl+"Contact/GetContactDetails", employee);  
  }  
  getContactDetailsById(id: number) {  
    return this.http.get<Contact>(this.baseUrl+"Contact/GetContactDetails/"+ id);  
  }  
  updateContactDetails(employee: Contact) {  
    return this.http.put(this.baseUrl +"Contact/GetContactDetails/" + employee.id, employee);  
  }  
}  