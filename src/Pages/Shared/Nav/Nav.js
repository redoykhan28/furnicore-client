import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo-removebg-preview.png'

const Nav = () => {
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
                        <li><Link to={'/blogs'}>About</Link></li>
                    </ul>
                </div>
                <Link to={'/home'} className="btn btn-ghost normal-case text-xl"><img className='w-40' src={logo} alt="Logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-semibold px-1">
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/categories'}>Categories</Link></li>
                    <li><Link to={'/blogs'}>About</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn bg-black text-white rounded-none lg:w-32 hover:bg-slate-200 hover:text-black hover:bg-transparent">Login</Link>
            </div>

        </div>
    );
};

export default Nav;