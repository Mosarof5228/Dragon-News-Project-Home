import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);
    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Career</Link></li>

    </>
    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result.user);

            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="navbar bg-base-100 mt-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-4 flex items-center">
                <div className="w-10 rounded-full">
                    <img className="rounded-full "
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
                {
                    user ? <Link onClick={handleLogout}>Logout</Link> : <Link to='/login' className="btn btn-sm">Login</Link>
                }


            </div>

        </div>

    );
};

export default Navbar;