import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

class User{
    constructor(
        public userName: string,
        public userPass: string,
        public token: string
    ){ }
}

export class AuthService {

    isLogin: boolean = false
    isUser: boolean = false
    secret_key: string = 'secret_key'
    allUsers: any
    private userUrl = 'api/users'

    constructor(
        private router: Router,
        private httpClient: HttpClient
    ) {}

    getUsers(): Observable<object> {
        return this.httpClient.get(this.userUrl)
    }

    userLogin(userName: string, userPass: string) {
        this.getUsers().subscribe(users => {
            this.allUsers = users
            this.isUser = this.allUsers.some((user: User, i: number) => {
                if (user.userName === userName && user.userPass === userPass) {
                    let token = user.userName + user.userPass + this.secret_key
                    localStorage.setItem('user_token', JSON.stringify(token))
                    this.router.navigate([''])
                    this.authCheck()
                    return true
                } 
            })
        })

        if (!this.isUser) {
            return 'Invalid username or password'
        }
    }

    authCheck() {
        this.getUsers().subscribe((users: User[]) => {
            users.some(user => {
                let token = `"${user.userName + user.userPass + this.secret_key}"`
                if (token == localStorage.getItem('user_token')) {
                    this.isLogin = true
                    return true
                }
            })
        })
    }

    logout() {
        localStorage.removeItem('user_token')
        this.isLogin = false
        this.authCheck()
    }

}