import { Component, OnInit ,SimpleChanges } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _user : UserService,
              private router : Router) { }

  ngOnInit(): void {
  }



  logout()
  {
    this._user.logout();
    this.router.navigateByUrl("/signin");
  }

}
