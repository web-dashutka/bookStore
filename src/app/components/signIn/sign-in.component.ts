import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})

export class SignInComponent {

  userName: string;
  userPass: string;

  constructor(private authService: AuthService) {}

  login() {
    this.authService.userLogin(this.userName, this.userPass);
  }

}
