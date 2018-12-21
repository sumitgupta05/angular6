import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/services/common.service';
import { AlertService, AuthenticationService } from '../Service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
  //styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  userName: string;
  constructor(
    public cmnSrv: CommonService,
    private authenticationService: AuthenticationService,
    public router: Router
  ) {
  
    if (this.authenticationService.currentUserValue) {
      this.userName = this.authenticationService.currentUserValue.userName
    } else {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {

  }

}
