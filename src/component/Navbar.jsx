
import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div className="navbar">
            <h2>contact Appliction</h2>
            <Link to="/">login</Link>
            <Link to="/contact"> show contact</Link>
            <Link to="/Register">Register</Link>
            <Link to="/About">About</Link>
            <Link to="/Show_count">Show_count</Link>
        </div>
    );
}
export default Navbar;