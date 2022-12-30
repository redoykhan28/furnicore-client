import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Assets/logo-removebg-preview.png'
import { authProvider } from '../../../Context/AuthContext';
import useAdmin from '../../../Hooks/AdminHooks';
import profile from '../../../Assets/user profile/blank-profile-picture-g1cca60b8e_1280.png'

const Nav = () => {

    //use context
    const { user, logout } = useContext(authProvider)

    const [isAdmin] = useAdmin(user?.email)

    //handle logout
    const handleLogout = () => {

        //using logout
        logout()
            .then(res => {

            })
    }

    return (
        <div className="navbar lg:w-11/12 mx-auto p-4 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link to={'/categories'}>Categories</Link></li>
                        <li><Link to={'/blogs'}>Blogs</Link></li>
                        {
                            isAdmin &&
                            <li><Link to={'/dashHome'}>Dashboard</Link></li>


                        }
                    </ul>
                </div>
                <Link to={'/home'} className="btn btn-ghost normal-case text-xl"><img className='w-40' src={logo} alt="Logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul data-aos="zoom-in" className="menu menu-horizontal  px-1">
                    <li><NavLink className={({ isActive }) => isActive ? 'bg-transparent font-bold' : 'font-semibold'} to={'/home'}>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'bg-transparent font-bold' : 'font-semibold'} to={'/categories'}>Categories</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'bg-transparent font-bold' : 'font-semibold'} to={'/blogs'}>Blogs</NavLink></li>
                    {
                        isAdmin &&
                        <li><NavLink className={({ isActive }) => isActive ? 'bg-transparent font-bold' : 'font-semibold'} to={'/dashHome'}>Dashboard</NavLink></li>

                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex items-center'>
                            <div className="avatar">
                                <div className="w-8 rounded-full">
                                    <img src={profile} alt="profile" />
                                </div>
                            </div>
                            <Link onClick={handleLogout} className="btn btn-outline ml-4">Logout</Link>
                        </div>

                        :
                        <Link to={'/login'} className="btn bg-black text-white rounded-none lg:w-32 hover:bg-slate-200 hover:text-black hover:bg-transparent">Login</Link>
                }
            </div>

        </div>
    );
};

export default Nav;