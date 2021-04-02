import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

type token = {
    data:{
        name: String
    }
}

const decodeToken = ():token => {
  const token = Cookies.get("token");
  return jwt_decode(token);
};

export { decodeToken };
