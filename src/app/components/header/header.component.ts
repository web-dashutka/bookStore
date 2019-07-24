import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements DoCheck {

  public isLogin: boolean;

  constructor(private authService: AuthService) { }

  ngDoCheck(): void {
    this.isLogin = this.authService.isLogin;
  }

  public logout(): void {
    this.authService.logout();
  }

}
