import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {

  public isLogin: boolean;

  constructor(private authService: AuthService) {
    this.authCheck();
  }

  private authCheck() {
   this.authService.authCheck().then(result => {
      this.isLogin = result;
    });
  }

  public logout(): void {
    this.authService.logout().then(result => {
      this.isLogin = result;
    });
  }

}
