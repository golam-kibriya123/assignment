import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders/AuthProviders';
import { AiFillLike } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const DontMiss = () => {
    const { chefs } = useContext(AuthContext);
    // console.log(chefs.slice(0, 3))
    const likeChef = chefs.filter(chef => chef.likes > 12500)
    console.log(likeChef)
    return (
        <div>
            <div className='text-center mt-40 '>
                <h2 className='border-b-2 border-[#6ebe3b] mb-10 text-xl md:text-2xl uppercase font-semibold md:font-bold inline-block '>To day's <span className='text-[#6ebe3b] relative'>Ranked
                    <div className='h-[1.8px] w-full bg-black inline-block absolute -bottom-[4.5px] left-0 '></div> </span>Board </h2>
            </div>
            <div className='flex'>
                {likeChef.map(chef => {
                    return <div className=" flex flex-col items-center  shadow-xl">
                        <figure className='w-1/2 '>

                            <img src={chef.image_url} alt="Album" className='w-full' /></figure>

                        <h2 className="card-title my-3">{chef.name}</h2>
                        <p className='relative text-center mb-3'>Likes{chef.likes} <AiFillLike className='absolute top-0 inline text-xl ps-1' /></p>

                        <Link to={`/recipes/${chef.id}`} className={`bg-[#6ebe3b] hover:bg-white text-white hover:text-[#6ebe3b] border border-[#6ebe3b]   px-2  mx-2 font-semibold p-2 `} >View Profile</Link >

                    </div>
                })}
            </div>
        </div>
    );
};

export default DontMiss;