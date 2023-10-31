enum Role {
    user = 'user',
    admin = 'admin'
}

type LoginDetail = {
    name?: string,
    email: string,
    password: string
    role: Role
}

const LoginAdmin = {
    email: 'jasminkorat@gmail.com',
    password: '123456',
    role: Role.admin
}

const LoginUser = {
    email: 'happykorat@gmail.com',
    password: '123456',
    role: Role.user
}

const isAdmin = (user: LoginDetail) => {
    const { role } = user
    return role === 'admin' ? `You have allow to login admin panel.` : `You have not allow to login admin panel.`
}

const checkAdmin = isAdmin(LoginAdmin)
console.log("ADMIN-------------->", checkAdmin)
