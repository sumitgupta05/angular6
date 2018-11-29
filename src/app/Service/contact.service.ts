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
 
//   deleteEmployees(id: number) {  
//     return this.http.delete<Employee[]>(this.baseUrl + id);  
//   }  
//   createUser(employee: Employee) {  
//     return this.http.post(this.baseUrl, employee);  
//   }  
//   getEmployeeById(id: number) {  
//     return this.http.get<Employee>(this.baseUrl + '/' + id);  
//   }  
//   updateEmployee(employee: Employee) {  
//     return this.http.put(this.baseUrl + '/' + employee.id, employee);  
//   }  
}  