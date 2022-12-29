import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Nav from '../Pages/Shared/Nav/Nav'

const DashLayout = () => {
    return (
        <div>
            <div className='text-start'>
                <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <Outlet></Outlet>


                </div>
                <div className="drawer-side bg-base-200 pt-6">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        <li><NavLink className={({ isActive }) => isActive ? 'bg-black text-white rounded-sm mt-2' : 'text-black text-decoration-none font-bold'} to={'/dashHome'}>Home</NavLink></li>

                        <div>

                            <li><NavLink className={({ isActive }) => isActive ? 'bg-white text-black rounded-sm mt-2' : 'text-black text-decoration-none font-bold'} to={'/myorder'}>My Orders</NavLink></li>

                        </div>



                        <li><NavLink className={({ isActive }) => isActive ? 'bg-white text-black rounded-sm mt-2' : 'text-black text-decoration-none font-bold'} to={'/addproduct'}>Add Product</NavLink></li>




                        <li><NavLink className={({ isActive }) => isActive ? 'bg-white text-black rounded-sm mt-2' : 'text-black text-decoration-none font-bold'} to={'/myproduct'}>My Products</NavLink></li>

                        <li><Link className='text-black font-semibold mt-20' to={'/home'}>Exit from Dashboard <FaSignOutAlt /></Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashLayout;