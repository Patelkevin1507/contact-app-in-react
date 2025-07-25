import { useState } from "react";
import { NavLink } from "react-router";
import { getUser } from "../apis/handle_api";
import { useNavigate } from "react-router-dom";
import '../component/Login.css'
// import { addUser } from "../apis/handle_api";
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const submitLogin = async (e) => {
        e.preventDefault()
        const res = await getUser(email, password)
        const user = (res.data);
        console.log(user);
        if(user.length > 0){
            sessionStorage.setItem("userId",user[0].id)
            alert("login secc")
            navigate("/Contact");
            
        }
        else{
            alert("not login..!")
            navigate("/Register")
        }
        

    }

    return (
        <div className="login-container">
    <h2>Login Page</h2>
        
            <form id="login_form" onSubmit={submitLogin}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" /><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" /><br />
                <button type="submit">Login</button>
                <button type="reset"></button>


                <NavLink to="/Register">Sign up?</NavLink>

            </form>
                </div>
        
    )
}
export default Login;