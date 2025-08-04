const { rejects } = require('assert')
const connection = require('../db.js')
const bcrypt = require("bcrypt")
const { resolve } = require('path')
const { error } = require('console')
let salrouds = 10  // 4 - 32 --> 7 to 10 mins
function registor(req){
    const {id , username , password} = req.body
    return new Promise((resolve,reject)=>{
        let query = 'select * from users where username = ?'
        connection.query(query,[username],async (err,data)=>{
            if(data.length > 0){
                return reject("username alredy exist")
            }else{
                let hashPassword = await bcrypt.hash(password , salrouds)
                let query = "INSERT INTO users (id, username , password) values (?,?,?)"
                connection.query(query,[id ,username , hashPassword] ,(err , data)=>{
                    if(err){
                        console.log(err.message)
                        return reject(err.message)
                    }else{
                    return resolve(data) 
                    }
                })
            }
        })
    })
}


function userlogin(req){
   const {username  , password} = req.body

   return new Promise((resolve , reject)=>{
        let query = 'select * from users where username =?'
        connection.query(query,[username] ,async (err ,data)=>{   // data is noting but array [1].length == 1
            if(err){
                return reject(err)
            }else{
                if(data.length < 1){
                    return reject('user not found')
                }else{
                    let isTrue = await bcrypt.compare(password , data[0].password)

                    if(isTrue && data[0].username === username){
                        return resolve('user sucessfully login')
                    }else{
                        return reject("invalied credetionls")
                    }
                }
            }
        })
   })
}

function getUsers (){
    return new Promise((resolve , reject)=>{
        let query = 'select * from users'
        connection.query(query ,(err,data)=>{
            if(err){
                return reject(error)
            }else{
                return resolve(data)
            }
        })
    })
}

module.exports = {registor ,userlogin , getUsers}