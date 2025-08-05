const { registor , userlogin , getUsers} = require("../module/authmodule.js");
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
    res.send({
      msg : "login sucessfully",
      data:data
    });
  } catch (err) {
    res.send({
      msg :err,
      error:"login error"
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
      error:err
    });
  }
};

module.exports = { reg, login,getUsersData };
