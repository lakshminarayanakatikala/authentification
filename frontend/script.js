let form = document.forms[0]
let login_form = document.forms[1]

let userid = document.getElementById('userid')
let username = document.getElementById('username')
let password = document.getElementById('password')
let login_username = document.getElementById('login_username')
let login_password = document.getElementById('login_password')
let submitbtn = document.getElementById('submitbtn')

form.addEventListener('submit',async(e)=>{ 
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


login_form.addEventListener('submit',async(e)=>{ 
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





