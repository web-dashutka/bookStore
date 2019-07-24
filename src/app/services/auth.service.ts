import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

class User {
    constructor(
        public userName: string,
        public userPass: string,
        public token: string,
    ) { }
}

export class AuthService {

    public isLogin = false;
    public isUser = false;
    public allUsers: any;
    public secretKey = 'secret_key';
    private userUrl = 'api/users';

    constructor(
        private router: Router,
        private httpClient: HttpClient,
    ) {}

    public getUsers(): Observable<object> {
        return this.httpClient.get(this.userUrl);
    }

    public userLogin(userName: string, userPass: string) {
        this.getUsers().subscribe(users => {
            this.allUsers = users;
            this.isUser = this.allUsers.some((user: User) => {
                if (user.userName === userName && user.userPass === userPass) {
                    const token = user.userName + user.userPass + this.secretKey;
                    localStorage.setItem('user_token', JSON.stringify(token));
                    this.router.navigate(['']);
                    this.authCheck();
                    return true;
                }
            });
        });
    }

    public authCheck() {
        const authCheckResult: Promise<boolean> = new Promise((resolve: (value: boolean) => void) => {
            this.getUsers().subscribe((users: User[]) => {
                users.some(user => {
                    const token = `"${user.userName + user.userPass + this.secretKey}"`;
                    if (token === localStorage.getItem('user_token')) {
                        this.isLogin = true;
                        return true;
                    } else {
                        this.isLogin = false;
                    }
                });
                resolve(this.isLogin);
            });
        });
        return authCheckResult;
    }

    public logout(): Promise<boolean> {
        localStorage.removeItem('user_token');
        return this.authCheck();
    }

}
