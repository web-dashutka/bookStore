export class User{
    constructor(
        public userName: string,
        public userPass: string
    ){ }
}

export let users: User[] = [
    {userName: 'Darya', userPass: '111'},
    {userName: 'Nata', userPass: '222'}
]
