import { useState, useEffect } from "react";
import { addContact, getupdateContact, updateContact } from "../apis/handle_api";
import { deleteContact, getUserbyuserId } from "../apis/handle_api";

import '../component/Contact.css'

// import { Phonenumber } from "../utilities/utilities";

function Contact() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [contact, setContact] = useState([]);
    const submitContact = (e) => {
        e.preventDefault();
        const userId = sessionStorage.getItem("userId");
        addContact({ name, number, userId });
        alert("contact add successfully")
        // Phonenumber(Number)

    }
    async function handleContacts() {
        const userId = sessionStorage.getItem("userId");
        const res = await getUserbyuserId(userId);
        const user = res.data

        setContact(user)
        console.log("user", user);
    }
    async function handeldelete(id) {
        await deleteContact(id);
        // handleContacts()
    }

    async function handelUpdate(id) {
        let res = await getupdateContact(id);
        let user = res.data
        console.log(user);
        setId(user.id)
        setName(user.name)
        setNumber(user.number)

    }
    async function updateUser(e) {
        e.preventDefault();
        console.log(id);

        await updateContact(id, { name, number })
        alert("contact ipdate")
        setId("")
        setName("")
        setNumber("")
        // handleContacts()
    }

    useEffect(() => {
        handleContacts()
    }, [])






    return (
        <div className="add-contact-container">
            <h2>{id ? "Update Contact" : "Add Contact"}</h2>
            <form onSubmit={id ? updateUser : submitContact}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                <button type="submit">Add contact</button>
                <button onClick={updateUser}>update contact</button>
            </form>
            <div className="table-container">
                <h2>All Contact</h2>
                <table border="2" className="contact-table">
                    <thead>
                        <tr>
                            <th>contact name</th>
                            <th>contact number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contact.map((c) => (
                                <tr key={c.id}>
                                    <td>{c.name}</td>
                                    <td>{c.number}</td>
                                    <td>

                                        <button onClick={() => handeldelete(c.id)}>Delete</button>
                                    </td>
                                    <td>

                                        <button onClick={() => handelUpdate(c.id)}>Update</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>
            </div>
        </div>

    )
}
export default Contact;
