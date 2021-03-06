import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/services/common.service';
import {AuthenticationService} from '../Service/authentication.service'
@Component({
  selector: 'app-sideheader',
  templateUrl: './side-header.component.html',
  styleUrls: ['./side-header.component.scss']
 
})
export class SideHeaderComponent   {

  constructor(public cmnSrv: CommonService,public authenticationService:AuthenticationService) {  }

  sidebarItems = [
    {link: '/homeIndex', label: 'Dashboard', icon: 'dashboard'},
    {label: 'Components', icon: 'apps', subItem: [
      {link: '/register', label: 'Register', icon: 'R'},
      {link: '/registerList', label: 'Register User List', icon: 'R'},
      //{link: '/components/panels', label: 'panels', icon: 'p'},
      // {link:'/components/alerts',label:'alerts',icon:'a'},
      // {link:'/components/notifications',label:'notifications',icon:'n'},
      //{link: '/components/icons', label: 'icons', icon: 'i'},
      //{link: '/components/typography', label: 'typography', icon: 't'},
    ]},
    {label: 'Forms', icon: 'ballot', subItem: [
      {link: '/advancedform', label: 'advanced form', icon: 'af'},
      // {link:'/forms/validations',label:'Form Validation',icon:'fv'}
    ]},
    // {label: 'Pages', icon: 'pages', subItem: [
    //   {link: '/pages/notfound', label: 'Not Found', icon: 'nf'},
    //   {link: '/pages/auth', label: 'Auth', icon: 'A'}
    // ]},
    // { label: 'Tables', icon: 'grid_on', subItem: [
    //   {link: '/tables/basic', label: 'Basic Table', icon: 'BT'},
    //   {link: '/tables/smart', label: 'smart table', icon: 'ST'}
    // ]},
    {link: '/charts', label: 'Charts', icon: 'show_chart'},
    // {link: '/maps', label: 'Maps', icon: 'place'},
    // {link: '/editors', label: 'Editors', icon: 'edit'},
    // {link: '/calendar', label: 'Calendar', icon: 'date_range'},
    // {label: 'Menu', icon: 'menu', subItem: [
    //   {link: 'void()', label: 'Sub Menu L1', icon: 'l1'},
    //   { label: 'Sub Menu L1', icon: 'l1' , subItem: [
    //     {link: 'void()', label: 'Sub Menu L2', icon: 'l2'},
    //     {link: 'void()', label: 'Sub Menu L2', icon: 'l2'},
    //   ]},
    // ]},
    
  ];


}
