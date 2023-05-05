import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
    const { createUsers, users, spinner } = useContext(AuthContext);

    const [passwordHide, setPasswordHide] = useState(true);
    const showHide = () => {
        setPasswordHide(!passwordHide)
    };
    const [photoUrl, setPhotoUrl] = useState({});
    const [displayName, setDisplayName] = useState({})

    const handelRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        setDisplayName(name);
        setPhotoUrl(photo);



        createUsers(email, password)
            .then((result) => {
                result.user.displayName = displayName;
                result.user.photoURL = photoUrl;
                alert("success")
            })
            .catch(error => {
                console.log(error.message)
                alert(`${error.message}`)
            })
        form.reset()
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handelRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Your name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your photo URL</span>
                                </label>
                                <input type="text" placeholder="Your photo URL" name='photo' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label relative">
                                    <span className="label-text">Password</span>
                                    <AiFillEyeInvisible onClick={showHide} className={`absolute -bottom-8  right-2 font-semibold ${passwordHide ? '' : 'hidden'} text-[#6ebe3b]`} />

                                    <AiFillEye onClick={showHide} className={`absolute -bottom-8  right-2 font-semibold ${passwordHide ? 'hidden' : ''} text-[#6ebe3b]`} />

                                </label>
                                <input type={`${passwordHide ? 'password' : 'text'}`} placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-[#6ebe3b] hover:bg-white text-white hover:text-[#6ebe3b] border border-[#6ebe3b]  px-1 md:px-2 py-1 md:mx-2 mx-1 font-semibold h-9">Submit</button>
                            </div>
                           
                        </form> <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;