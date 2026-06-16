import { Link } from "react-router-dom";

const Navbar = () => {

 const logout = () => {

   localStorage.removeItem(
     "token"
   );

   window.location.href =
   "/login";
 };

 return (

 <nav
 className="navbar navbar-dark bg-dark"
 >

 <div className="container">

 <Link
 className="navbar-brand"
 to="/events"
 >
 Event App
 </Link>

 <div>

 <Link
 className="btn btn-light me-2"
 to="/events"
 >
 Events
 </Link>

 <Link
 className="btn btn-light me-2"
 to="/my-registrations"
 >
 My Registrations
 </Link>

 <button
 className="btn btn-danger"
 onClick={logout}
 >
 Logout
 </button>

 </div>

 </div>

 </nav>
 );
};

export default Navbar;