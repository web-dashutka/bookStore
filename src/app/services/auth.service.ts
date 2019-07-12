import { User } from '../data/user-data.service';
import { users } from '../data/user-data.service';
import { Router } from '@angular/router';

export class AuthService {
    private users: object[] = [...users];
    constructor(private router: Router) {}

    userLogin(userName: string, userPass: string) {
        let secret_key: string = 'secret_key';
        let isUser: boolean = this.users.some((user: User) => {
            if (user.userName === userName && user.userPass === userPass) {
                user.token = user.userName + user.userPass + secret_key;      
                localStorage.setItem('auth_token', user.token);
                return true;
            }
        })
        
        if (isUser) {
            this.router.navigate([''])
        } else {
            return 'Invalid username or password';
        }
         
    }

    // userRegistration(userName: string, userPass: string, token: string = '') {
    //     this.users.push(new UserData(userName, userPass, token))
    // }
}