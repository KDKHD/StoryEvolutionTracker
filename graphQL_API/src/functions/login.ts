import jwt from "jsonwebtoken";
import User from "../database/models/user";
import db from "../database/connection";
db._connect();

require("dotenv").config();

module.exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body);
  const { email, password } = body;
  //check if user exists
  User.findOne({ email }).then((user: any) => {
    if (user == null) {
      const response = {
        statusCode: 403,
        body: "User not found",
      };

      return callback(null, response);
    }

    if (user.passwordh == password) {
      const token = jwt.sign(
        {
          data: {
            id:user._id,
            email,
            name: user.name,
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
    } else {
      const response = {
        statusCode: 403,
        body: "Invalid password",
      };

      return callback(null, response);
    }
  });
};
