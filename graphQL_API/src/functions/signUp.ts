import jwt from "jsonwebtoken";
import User from "../database/models/user";
import db from "../database/connection";
db._connect();
require("dotenv").config();

module.exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body);
  const { email, password1, password2, name } = body;

  if (password1 != password2) {
    const response = {
      statusCode: 403,
      body: "Passwords must match",
    };

    return callback(null, response);
  }
  //check if user exists

  User.findOne({ email }).then((user: any) => {
    if (user) {
      const response = {
        statusCode: 403,
        body: "Email already exists",
      };

      return callback(null, response);
    }
    //create new user

    User.create({ email, passwordh: password1, name }).then((user) => {
      const token = jwt.sign(
        {
          data: {
            id:user._id,
            email,
            name,
            iat: Math.floor(Date.now() / 1000) - 30,
          },
        },
        process.env.TOKEN_SECRET,
        { expiresIn: "1h" }
      );

      const response = {
        statusCode: 200,
        body: JSON.stringify({
          token,
        }),
      };

      return callback(null, response);
    });
  });
};
