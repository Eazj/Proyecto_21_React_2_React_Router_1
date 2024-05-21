import { Link } from "react-router-dom";

function Links() {
    return (
        <>
            <div className="div_links">
                <Link to="/">Home 🏠</Link>
                <Link to="/contact">Contacto 📒</Link>
            </div>
        </>
    )
}
export default Links;