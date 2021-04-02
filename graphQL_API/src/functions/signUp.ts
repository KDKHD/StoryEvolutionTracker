import jwt from "jsonwebtoken";
import User from "../database/models/user";
import db from "../database/connection";
db._connect();
require("dotenv").config();

module.exports.handler = async (event, context, callback) => {
  const body = JSON.parse(event.body);
  const { email, password1, password2, name } = body;

  if (password1 != password2) {
    const response = {
      statusCode: 403,
      body: "Passwords must match",
    };

    return response;
  }
  //check if user exists

  const promise = new Promise((resolve, reject) => {
    User.findOne({ email }).then((user: any) => {
      if (user) {
        const response = {
          statusCode: 403,
          body: "Email already exists",
        };

        return resolve(response)
      }
      //create new user

      User.create({ email, passwordh: password1, name }).then((user) => {
        const token = jwt.sign(
          {
            data: {
              id: user._id,
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

        return resolve(response)
      });
    });
  });

  return await promise
};
