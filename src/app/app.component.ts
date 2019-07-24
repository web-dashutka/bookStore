import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})

export class AppComponent {

  public isLogin: boolean;

  constructor(public authService: AuthService) {
    this.authService.authCheck();
  }

}
