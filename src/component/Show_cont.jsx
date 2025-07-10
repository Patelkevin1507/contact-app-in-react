import { useEffect, useState } from "react";
import { deleteContact, getUserbyuserId } from "../apis/handle_api";
// import { deleteUserbyuserId } from "../api/handle_api";

function Showcont() {
    const [contact, setContact] = useState([]);

    async function handleContacts() {
        const userId = sessionStorage.getItem("userId");
        const res = await getUserbyuserId(userId);
        console.log(res);
        const user = res.data
        console.log(user);

        


        setContact(res.data)
    }
    async function handeldelete(id) {
        await deleteContact(id);
        handleContacts()
    }







    useEffect(() => {
        handleContacts()
    });
    return (
        <>
            <h2>all contact</h2>
            <table border="2">
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
                                <button onClick={() => handeldelete(c.id)}>Delete</button>
                                <button>Update</button>
                            </tr>
                        ))
                    }

                </tbody>

            </table>
        </>
    )

}
export default Showcont;