export class User{
    constructor(
        public userName: string,
        public userPass: string,
        public token: string
    ){ }
}

export let users: User[] = [
    {userName: 'Darya', userPass: '111', token: ''},
    {userName: 'Nata', userPass: '222', token: ''}
]
