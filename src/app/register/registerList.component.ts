import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { User } from '../model/user';
@Component({
    selector: 'app-RegisterList',
    templateUrl: './registerList.component.html'
})

export class RegisterListComponent implements OnInit {
 public UserList;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,

    ) {
    }
    ngOnInit() {
        this.getUserDetails();
    }
    getUserDetails() {
        this.userService.getAll().subscribe(
          (data: User[]) => {  
            this.UserList = data;  
          });  
    }
  
}
