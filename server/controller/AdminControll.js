const AsyncHandler = require("express-async-handler");
const Adminmodel = require("../model/AdminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecretKey = "castmee_secret_key";
const jwtExpiration = "80d";

exports.createadmin = AsyncHandler(async (req, res) => {
  try {
    const Admindata = await Adminmodel.create({
      name: "castmee@2024",
      password: "castmeE@49624",
    });
    res.json(Admindata);
  } catch (err) {
    console.log("An error " + err);
  }
});

exports.login = AsyncHandler(async (req, res) => {
  const { input1, input2 } = req.body;
  try {     
    const admindata = await Adminmodel.findOne({ name: input1 });
    if (!admindata) {
      return res.status(404).json({ error: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(input2, admindata.password);

    if (passwordMatch) {
      const payload = {
        userId: admindata._id,
        name: admindata.name,
      };

      const token = jwt.sign(payload, jwtSecretKey, {
        expiresIn: jwtExpiration,
      });
      res.status(200).json({
        token: token,
      });
    } else {
      res.status(401).json({ invalid: true, message: "Invalid details" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});
