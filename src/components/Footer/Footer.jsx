import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './Footer.css'
import Sppiner from '../Spinner/Sppiner';
const Footer = () => {
    return (
        <div className='bg-[#6ebe3b] text-white '>
            <footer className="footer p-10  mt-20 relative">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">

                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn border-2 border-white bg-[#6ebe3b] hover:border-[#6ebe3b] hover:bg-white hover:text-[#6ebe3b] hover:shadow-zinc-200 absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                    <div className="md:place-self-center justify-self-center mt-4">
                        <div className="flex flex-row justify-evenly w-44 text-3xl  rounded-lg p-1">
                            <a className=' w-1/2 p-1 f-btn border-4 border-r-0 hover:text-[#6ebe3b] rounded-l-lg'>
                                <FaGithub  className='mx-auto'/>
                            </a>
                            <a  className=' w-1/2 p-1 f-btn border-4 border-l-1 rounded-r-lg'>
                                <FcGoogle className='mx-auto'/>
                            </a>
                            
                        </div>
                    </div>
                </div>

            </footer>
            <small className='text-center block py-3'>Copyright © 2023 - All right reserved by ACME Industries Ltd</small>
        </div>
    );
};

export default Footer;