const { registor , userlogin , getUsers} = require("../module/authmodule.js");

const fs = require("fs")

let reg = async (req, res) => {
  try {
    let data = await registor(req);
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};

let login =async (req, res) => {
  try {
    let data = await userlogin(req);
    fs.writeFile('test.txt', JSON.stringify(data), (err) => {
    if (err) throw err;
      res.send({
          msg: "error writing file",
          error: err.message
        });
  });
    res.send({
      msg : "login sucessfully",
      data:data
    });
  } catch (err) {
    res.send({
      msg : "error",
      error:err.message
    });
  }
};

let getUsersData =async (req, res) => {
  try {
    let data = await getUsers(req);

    res.send({
      msg : "get data sucessfully",
      data:data
    });
  } catch (err) {
    res.send({
      msg : "error",
      error:err.message
    });
  }
};

module.exports = { reg, login,getUsersData };
