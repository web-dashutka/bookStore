import { UserData } from '../data/user-data.service';
export class AuthService {
    private users: UserData[] = []

    userLogin(userName: string, userPass: string) {
        this.users.push(new UserData(userName, userPass))
        console.log(this.users)
    }
}