import { useEffect, useState } from "react";
import { getUserbyuserId } from "../apis/handle_api";

function Showcont() {
    const [contact, setContact] = useState([]);

    async function handleContacts() {
        const userId = sessionStorage.getItem("userId");
        const res = await getUserbyuserId(userId);
        setContact(res.data)
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
                            </tr>
                        ))
                    }

                </tbody>

            </table>
        </>
    )
}
export default Showcont;