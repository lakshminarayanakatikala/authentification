// Get DOM elements for containers and switch links
const registerContainer = document.getElementById('register-container');
const loginContainer = document.getElementById('login-container');
const showLogin = document.getElementById('show-login');
const showRegister = document.getElementById('show-register');

// Switch to login form
showLogin.addEventListener('click', function(e) {
    e.preventDefault();
    registerContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});

// Switch to register form
showRegister.addEventListener('click', function(e) {
    e.preventDefault();
    loginContainer.style.display = 'none';
    registerContainer.style.display = 'block';
});

// Registration form logic
let register_form = document.getElementById('register-form')
let login_form = document.getElementById('login-form')

let userid = document.getElementById('userid')
let username = document.getElementById('username')
let password = document.getElementById('password')
let login_username = document.getElementById('login_username')
let login_password = document.getElementById('login_password')

register_form.addEventListener('submit', async(e) => { 
    e.preventDefault()
    let obj = {
        id : userid.value,
        username : username.value,
        password : password.value
    }
    let res = await fetch("http://localhost:3005/auth/reg" ,{
        method :"POST",
        headers :{
            'Content-Type': "application/json"
        },
        body : JSON.stringify(obj)
    })
    let resData = await res.json()
    console.log(resData)
})

// Login form logic
login_form.addEventListener('submit', async(e) => { 
    e.preventDefault()
    let obj = {
        username : login_username.value,
        password : login_password.value
    }
    let res = await fetch("http://localhost:3005/auth/login" ,{
        method :"POST",
        headers :{
            'Content-Type': "application/json"
        },
        body : JSON.stringify(obj)
    })
    let resData = await res.json()
    console.log(resData)
})
