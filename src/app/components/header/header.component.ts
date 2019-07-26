import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {

  public loginStatus: boolean;

  constructor(private authService: AuthService) {
    this.authCheck();
   }

  public authCheck() {
    this.authService.loginSubject.subscribe(isLogin => {
      this.loginStatus = isLogin;
    });
  }

  public logout() {
    this.authService.logout();
    this.authCheck();
  }

}
