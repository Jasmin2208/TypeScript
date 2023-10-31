"use strict";
var Role;
(function (Role) {
    Role["user"] = "user";
    Role["admin"] = "admin";
})(Role || (Role = {}));
const LoginAdmin = {
    email: 'jasminkorat@gmail.com',
    password: '123456',
    role: Role.admin
};
const LoginUser = {
    email: 'happykorat@gmail.com',
    password: '123456',
    role: Role.user
};
const isAdmin = (user) => {
    const { role } = user;
    return role === 'admin' ? `You have allow to login admin panel.` : `You have not allow to login admin panel.`;
};
const checkAdmin = isAdmin(LoginAdmin);
console.log("ADMIN-------------->", checkAdmin);
