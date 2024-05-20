import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
    <nav>
        <div>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contacto</Link>
        </div>
        <p>Happy Cake</p>
    </nav>
        </>
    )
}
export default Navbar;