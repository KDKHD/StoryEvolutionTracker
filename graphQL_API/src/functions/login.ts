import jwt from "jsonwebtoken";
import User from "../database/models/user";
import db from "../database/connection";
import { shake128 } from "js-sha3";

db._connect();

require("dotenv").config();

module.exports.handler = async (event, context, callback) => {
  const body = JSON.parse(event.body);
  const { email, password } = body;
  //check if user exists
  const promise = new Promise((resolve, reject) => {
    User.findOne({ email })
      .then((user: any) => {
        if (user == null) {
          const response = {
            statusCode: 403,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: "User not found",
          };
          return resolve(response);
        }

        if (user.passwordh == shake128(password, 256)) {
          const token = jwt.sign(
            {
              data: {
                id: user._id,
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
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({
              token,
            }),
          };
          return resolve(response);
        } else {
          const response = {
            statusCode: 403,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: "Invalid password",
          };
          return resolve(response);
        }
      })
      .catch((e: any) => console.log(e));
  });

  return await promise;
};
