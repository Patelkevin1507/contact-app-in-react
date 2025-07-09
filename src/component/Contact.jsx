import { useState } from "react";
import { addContact } from "../apis/handle_api";

function Contact(){
    const [name,setName]=useState("");
    const [number,setNumber]=useState("");
    const submitContact=(e)=>
    {
    e.preventDefault();
    const userId = sessionStorage.getItem("userId");
    addContact({name,number,userId});
    alert ("contact add successfully")
    }
    
    return(
        <>
        <form onSubmit={submitContact}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
        <button type="submit">Add contact</button>
        </form>
        </>
    
    )
}
export default Contact;
 