import jwt from "jsonwebtoken";
require("dotenv").config();

module.exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body);
  const { email} = body;
  //check if user exists

  //send passwordResetLink

  const token = jwt.sign(
    {
      data: {
        email,
        iat: Math.floor(Date.now() / 1000) - 30,
      },
    },
    process.env.TOKEN_SECRET,
    { expiresIn: "1h" }
  );

  const link = `/newPassword?token=${token}`
  //send email
  const response = {
    statusCode: 200,
  };

  callback(null, response);
};
