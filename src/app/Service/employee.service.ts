import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Employee } from '../model/Employee.model'

@Injectable({  
  providedIn: 'root'  
})  
export class EmployeeService {  
  
  constructor(private http: HttpClient) { }  
  baseUrl: string = 'https://localhost:44301/api/';  
  
  getEmployees() {  
    return this.http.get<Employee[]>(this.baseUrl);  
  }  
  deleteEmployees(id: number) {  
    return this.http.delete<Employee[]>(this.baseUrl + id);  
  }  
  createUser(employee: Employee) {  
    return this.http.post(this.baseUrl, employee);  
  }  
  getEmployeeById(id: number) {  
    return this.http.get<Employee>(this.baseUrl + '/' + id);  
  }  
  updateEmployee(employee: Employee) {  
    return this.http.put(this.baseUrl + '/' + employee.EmployeeId, employee);  
  }  
}  