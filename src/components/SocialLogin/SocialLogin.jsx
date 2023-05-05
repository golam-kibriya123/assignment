import React, { useContext } from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { BsGoogle } from 'react-icons/bs';
import { AuthContext } from '../../providers/AuthProviders/AuthProviders';
const SocialLogin = () => {

    const { googleLogin } = useContext(AuthContext);
    // google

    const google = () => {
        googleLogin()
            .then((result) => {

                const user = result.user;

            }).catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage)

            });
    }
    return (
        <div className='flex text-3xl text-white border py-2 px-5 mx-auto bg-[#6ebe3b] rounded-t-lg'>
            <GoMarkGithub className='mx-3 hover:text-yellow-300 cursor-pointer' />
            <BsGoogle className='mx-3  cursor-pointer hover:text-yellow-300 ' onClick={google} />

        </div>
    );
};

export default SocialLogin;