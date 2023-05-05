import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { AuthContext } from '../../providers/AuthProviders/AuthProviders';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const [passwordHide, setPasswordHide] = useState(true);
    const showHide = () => {
        setPasswordHide(!passwordHide)
    };
    const { userLogin } = useContext(AuthContext);


    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        console.log(email)
        const password = form.password.value;
        userLogin(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                console.log(user.displayName
                )
                form.reset()

            })
            .catch(error => {
                console.log(error.message)
            })


    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
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

                                    <Link to="/register" className='label-text-alt link link-hover '>
                                        Go For Register
                                    </Link>
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-[#6ebe3b] hover:bg-white text-white hover:text-[#6ebe3b] border border-[#6ebe3b]  px-1 md:px-2 py-1 md:mx-2 mx-1 font-semibold h-9">Login</button>

                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;