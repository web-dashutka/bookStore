import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})

export class SignUpComponent {
  userName: string;
  userPass: string;
  authError: any;
}
