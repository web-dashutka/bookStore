import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export class AuthService {

    public isLogin = false;
    public allUsers: object;
    public secretKey = 'secret_key';
    private userUrl = 'api/users';
    public loginSubject = new BehaviorSubject(this.isLogin);

    constructor(
        private router: Router,
        private httpClient: HttpClient,
    ) {}

    public getUsers(): Promise<object> {
        return this.httpClient.get(this.userUrl).toPromise();
    }

    public userLogin(userName: string, userPass: string): void {
        this.getUsers().then(users => {
            for (const user in users) {
                if (users.hasOwnProperty(user)) {
                    if (users[user].userName === userName && users[user].userPass === userPass) {
                        this.useToken('create', [userName, userPass]);
                        this.router.navigate(['']);
                        this.isLogin = true;
                        this.loginSubject.next(this.isLogin);
                        return true;
                    }
                }
            }
        });
    }

    public logout(): void {
        this.useToken('remove');
        this.isLogin = false;
        this.loginSubject.next(this.isLogin);
    }

    private useToken(action: string, userData: string[] = []) {
        switch (action) {
            case 'create':
                const token = userData[0] + userData[1] + this.secretKey;
                localStorage.setItem('user_token', JSON.stringify(token));
                break;
            case 'remove':
                localStorage.removeItem('user_token');
                break;
        }
    }

}
