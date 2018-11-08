import {Component} from "@angular/core"

@Component ({

   selector:'my-employee',
   templateUrl:'./employee.Component.html'
})

export class employeeComponent{

    name: string="Sumit";
    lastName: string="Gupta";
    age: string="28";
    gender: string="Male";
}
