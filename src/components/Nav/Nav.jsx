import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AuthContext } from '../../providers/AuthProviders/AuthProviders';
import { getAuth, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import ActiveRoute from '../ActiveRoute/ActiveRoute';
const Nav = () => {
    const auth = getAuth(app)
    const { users, logout } = useContext(AuthContext);
    const [count, setCount] = useState(true);
    const countHandler = () => {
        setCount(!count)
    };
    const handelLogout = () => {
        signOut(auth)
            .then(() => { })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className='flex flex-col md:flex-row justify-between  p-4 mb-4 shadow-lg'>
            <div className="nav-logo">
                <h1 className='font-extrabold text-2xl md:text-3xl lg:text-5xl bg-[#6ebe3b] text-white ps-1'>Cook With <span className='text-[#6ebe3b] p-1 bg-white border-2 border-[#6ebe3b]'>Us</span></h1>
            </div>

            <div className='flex flex-row justify-between text-center relative mt-4 md:mt-0 '>
                <div className='h-9 w-9 bg-[#6ebe3b] rounded-full'> </div>
                {/* <div className={`md:hidden text-[#6ebe3b]`}>
                    <AiOutlineMenu onClick={() => countHandler()} className={`text-4xl  h-9 ${count || 'hidden'}`} />
                    <AiOutlineClose onClick={() => countHandler()} className={`text-4xl  h-9 ${count && 'hidden'}`} />
                </div> */}

                <div className={`nav-links flex flex-row     `}>
                    <ActiveRoute to="/">Home</ActiveRoute>

                    <ActiveRoute to="/blog" >Blog </ActiveRoute>
                </div>
                <div className="login-method h-9 flex">


                    <button className={`bg-[#6ebe3b] hover:bg-white text-white hover:text-[#6ebe3b] border border-[#6ebe3b]   px-2  mx-2 font-semibold  ${users || 'hidden'}`} onClick={handelLogout}>Logout</button>




                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? `  text-[#6ebe3b] border border-[#6ebe3b]  px-1 md:px-2 py-1 md:mx-2 mx-1 font-semibold ${users && 'hidden'} ` : `bg-[#6ebe3b] hover:bg-white text-white hover:text-[#6ebe3b] border border-[#6ebe3b]  px-1 md:px-2 py-1 md:mx-2 mx-1 font-semibold  ${users && 'hidden'} `
                        }
                    >
                        Login
                    </NavLink>

                </div>
            </div>
        </div >
    );
};

export default Nav
    ;