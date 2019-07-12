import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [AuthService]
})
export class SignInComponent {

  userName: string;
  userPass: string;
  authError: string;
  
  constructor(private authService: AuthService){}

  login() {
    this.authError = this.authService.userLogin(this.userName, this.userPass);
  }

  ngOnInit(){
    
  }
}