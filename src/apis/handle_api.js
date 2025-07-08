// import { Navigate } from "react-router-dom"
import { UAER_URL } from "./api"
import axios from "axios";

export async function addUser(user) {
   try {
      console.log(user);
      const Res = await axios.post(UAER_URL, user);
      // alert("Register successfully")
      return Res;
   } catch (error) {
      console.log(error);
   }
}
export async function getUser(email, password) {
   try {
      // wrong condition , no return error
      // const Res = await axios.get(`${UAER_URL}?"email"=${email}&&"password"=${password}`);
      // right condition
      const Res = await axios.get(`${UAER_URL}?email=${email}&&password=${password}`);
      return Res;
      
   } catch (error) {
      console.log("error : ",error);
      
   }

}

