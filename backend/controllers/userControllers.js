const { registor , userlogin } = require("../module/authmodule.js");

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
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};

module.exports = { reg, login };
