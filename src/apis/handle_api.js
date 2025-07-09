// import { Navigate } from "react-router-dom"
import { UAER_URL, CONTACT_URL } from "./api"
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
      console.log("error : ", error);

   }

}
export async function addContact(contact) {
   try {

      const Res = await axios.post(CONTACT_URL, contact);
      return Res;

   } catch (error) {
      console.log("error : ", error);

   }
}

export async function getUserbyuserId(userId) {
   try {
      const res = await axios.get(`${CONTACT_URL}?userId=${userId}`)
      return res;
   } catch (error) {

      console.log("error : ", error);
   }
}
