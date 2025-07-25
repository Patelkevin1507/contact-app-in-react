
import { Link } from "react-router-dom"
import '../component/Navbar.css'
function Navbar() {
    return (
        <div className="navbar">
            <h2>Contact Appliction</h2>
            <Link to="/Register">Register</Link>
            <Link to="/">Login</Link>
            <Link to="/contact"> ADD contact</Link>
            {/* <Link to="/Show_cont">Show_count</Link> */}
            <Link to="/About">About</Link>

        </div>
    );
}
export default Navbar;

