import { Link, NavLink } from "react-router-dom";
import { useContext, } from "react";
import userDefoultPic from '../../assets/user.png'
import logo from '../../assets/log-removebg-preview.png'
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = () => {
   


    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error)
            })
    }

    const navLink = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/assignments'}>Assignments</NavLink></li>
        {
            user ? <li className=" hidden"><NavLink to={'/login'}>Login</NavLink></li>: <li><NavLink to={'/login'}>Login</NavLink></li>
        }
        {
            user? <li className=" hidden"><NavLink to={'/register'}>Register</NavLink></li>: <li><NavLink to={'/register'}>Register</NavLink></li>
        }

        {
            user? <li><NavLink to={'/createassignment'}>Create Assignments</NavLink></li>: <li className="hidden"><NavLink to={'/createassignment'}>Create Assignments</NavLink></li>
        }
       {
        user?  <li><NavLink to={'/myassignment'}>My Assignment</NavLink></li>:  <li className="hidden"><NavLink to={'/myassignment'}>My Assignment</NavLink></li>
       }
        {
            user? <li><NavLink to={`/submittedassignment`}> Submitted Assignments</NavLink></li>: <li className="hidden"><NavLink to={'/submittedassignment'}> Submitted Assignments</NavLink></li>
        }

    </>
    return (
        <div className="navbar  mb-14 bg-green-400 rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <img className=" h-16" src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end gap-4 md:gap-8">
               
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                    {
                        user ? <img className=" rounded-full" src={user.photoURL} alt="" /> : <img className=" rounded-full mr-2" src={userDefoultPic} alt="" />
                    }

                </label>
                    {
                        user ? <h1 className="font-bold text-red-500">{user.displayName}</h1>: null
                    }

                {
                    user ? <button onClick={handleSignOut} className="btn btn-error text-white"> Sign Out </button> :
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;