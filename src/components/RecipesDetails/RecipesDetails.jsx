import React, { useContext, useEffect, useState } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { MdOutlineFavorite } from 'react-icons/md';
import { useLoaderData, useNavigate } from 'react-router-dom';
const RecipesDetails = () => {

    const newData = useLoaderData();
    const navigate = useNavigate();

    const { name, ingredients, cooking_method, photo_url, rating
    } = newData;


    const [favorite, setFavorite] = useState(false);
    return (
        <div>
            <div>
                <div className={` w-[90%]  bg-opacity-5 text-white p-8 m-8 mx-auto rounded-lg relative`}>

                    <div className=' py-10 relative'>
                        <h1 className=' bg-[#000000]  bg-opacity-50 p-2 font-bold text-2xl rounded-t-lg'>{name}</h1>
                        <img src={rating} alt="" className='absolute h-32 right-0 top-0' />
                    </div>
                    <div className='flex flex-col md:flex-row gap-5 mb-5'>

                        <div className="directions w-[95%] md:w-[40%] bg-[#000000]  bg-opacity-50 rounded-b-lg p-2 relative">
                            <div className='mb-2'>
                                <p className='uppercase font-bold border-b-4 pb-1 border-[#6ebe3b]  inline'>ingredients</p>
                            </div>
                            <ol className='list-decimal ps-5'>
                                {ingredients && ingredients.map(x => <li>{x}</li>)}
                            </ol>
                            <div className='absolute w-full h-full top-0 left-0 right-0 -z-20'>
                                <img src={photo_url} alt="" className=' h-full rounded-b-lg  w-full' />
                            </div>
                        </div>

                        <div className="directions w-[95%] md:w-[60%] bg-[#000000]  bg-opacity-50 rounded-b-lg p-2 relative">
                            <div className='mb-2'>
                                <p className='uppercase font-bold border-b-4 pb-1 border-[#6ebe3b]  inline'>directions</p>
                                <div className='absolute w-full h-full top-0 left-0 right-0 -z-20'>
                                    <img src={photo_url} alt="" className=' h-full rounded-lg  w-full' />
                                </div>
                            </div>
                            <p>
                                {cooking_method}
                            </p>
                        </div>
                    </div>
                    <HiArrowLeft className='absolute bottom-1  text-3xl p-1
                     hover:text-[#6ebe3b] bg-[#000000]  bg-opacity-50 rounded-md cursor-pointer border hover:border-[#6ebe3b] hover:bg-opacity-0' onClick={() => navigate(-1)} />
                    <button className={`absolute bottom-0 right-12 md:right-7 btn ${favorite&&'btn-disabled text-green-400'}`} onClick={()=>{setFavorite(!favorite)}}>
                        Add To Favorite
                        <MdOutlineFavorite className={`text-pink-600 text-4xl  cursor-pointer ps-1 ms-1 ${favorite&&'text-green-400'}`} />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default RecipesDetails;