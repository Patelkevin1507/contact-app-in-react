import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { addUser } from "../apis/handle_api"

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confpass, setConfpass] = useState('')
    const navigate = useNavigate();
    function submitRegister(e) {
        e.preventDefault();
        addUser({ name, email, password })
        alert("registerd..!")
        navigate("/");

    }

    return (

        <>
            <h2>register page</h2>
            <form id="login_form" onSubmit={submitRegister}>
                <input type="Text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Username" /><br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" /><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" /><br />
                <input type="password" value={confpass} onChange={(e) => setConfpass(e.target.value)} placeholder="Re-type Password" /><br />
                <button>Sign up</button>
            </form>
        </>
    )
}
export default Register