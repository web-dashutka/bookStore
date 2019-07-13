import { Component } from '@angular/core'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  userName: string
  userPass: string
  authError: any

  constructor(private authService: AuthService){}

}