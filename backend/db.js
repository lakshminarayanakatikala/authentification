const mysql2 = require("mysql2")

let connection = mysql2.createConnection({
    host :"localhost",
    user :"root",
    password : '123456',
    database :"practiceAuth"
})

connection.connect((err)=>{
    if(err){
        console.log("error in db connection")
    }else{
        console.log("db connect sucssfully")
    }
})

module.exports = connection


