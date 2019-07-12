import { User } from '../data/user-data.service';
import { users } from '../data/user-data.service';
import { Router } from '@angular/router';

export class AuthService {
    isLogin: boolean = false;
    isUser: boolean = false;
    private allUsers: object[] = [...users];
    constructor(private router: Router) {}

    userLogin(userName: string, userPass: string) {
        this.isUser = this.allUsers.some((user: User, i: number) => {
            if (user.userName === userName && user.userPass === userPass) {
                localStorage.setItem('user', JSON.stringify(user));
                this.router.navigate([''])
                this.authCheck()
                return true;
            } 
        })

        if (!this.isUser) {
            return 'Invalid username or password'
        }
         
    }

    authCheck() {
        localStorage.getItem('user') ? this.isLogin = true : null;
    }

    userRegistration(userName: string, userPass: string) {
        if(userName.length > 5 && userPass.length > 5) {
            return 'Password and login must contain more than 5 characters'
        } else {
            users.push(new User(userName, userPass))
            localStorage.setItem('user', JSON.stringify(new User(userName, userPass)));
            this.router.navigate([''])
            this.authCheck()
        }
    }

    logout() {
        localStorage.removeItem('user')
        this.isLogin = false;
        this.authCheck()
    }

}