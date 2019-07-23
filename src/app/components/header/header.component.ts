import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {

  public isLogin: boolean;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.isLogin = this.authService.isLogin;
  }

  public logout(): void {
    this.authService.logout();
  }

}
