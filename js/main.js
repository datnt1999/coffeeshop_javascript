let loginForm = document.querySelector('.login-form')
let loginLink = document.querySelector('.login-link')
let createAccount = document.querySelector('.link-register')
let registerForm = document.querySelector('.register-form')
let registerLink = document.querySelector('.register-link')
let closeFormLogin = document.querySelector('#close-login-form')
let closeFormRegister = document.querySelector('#close-register-form')
let contentLogin = document.querySelector('.login-form-content')
let contentRegister = document.querySelector('.register-form-content')
loginLink.onclick = () => {
    loginForm.classList.add('active')
}
createAccount.onclick = () => {
    loginForm.classList.remove('active')
    registerForm.classList.add('active')
}
closeFormLogin.onclick = () => {
    loginForm.classList.remove('active')
}
loginForm.onclick = () => {
    loginForm.classList.remove('active')
}
contentLogin.onclick = (event) => {
    event.stopPropagation()
}
contentRegister.onclick = (event) => {
    event.stopPropagation()
}
registerLink.onclick = () => {
    registerForm.classList.add('active')
}
closeFormRegister.onclick = () => {
    registerForm.classList.remove('active')
}
registerForm.onclick = () => {
    registerForm.classList.remove('active')
}
window.onscroll = () => {
    loginForm.classList.remove('active')
    registerForm.classList.remove('active')
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active')
    }
    else {
        document.querySelector('.header').classList.remove('active')
    }
}
let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector('.header .nav')
menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}
