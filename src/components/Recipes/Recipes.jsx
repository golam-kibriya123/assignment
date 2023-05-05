import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleRecipe from './SingleRecipe';
import { AiFillLike } from 'react-icons/ai';
import { GiCampCookingPot } from 'react-icons/gi';
const Recipes = () => {
    const data = useLoaderData();
    const { recipes, image_url, name ,no_recipes,experience,likes} = data;
    return (
        <div>
            <div className='flex flex-col md:flex-row items-start md:h-80  my-20'>

                <div className='w-full md:w-[40%] h-full '>
                    <img src={image_url} alt="" className='h-full w-full' />
                </div>

                <div className=' w-full md:w-[60%] h-full md:ps-32 pt-5 bg-[#6dbe3b99] text-white'>

                    <h1 className=' text-2xl font-bold '> {name}</h1>
                    <p className='my-3'>{no_recipes} years of experience</p>
                    <p className='relative inline '>{experience}  Recipes <GiCampCookingPot className='absolute top-0 inline text-xl ps-1' /></p>
                    <p className='relative  my-3'> {likes
                    } Likes<AiFillLike className='absolute top-0 inline text-xl ps-1' /></p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, vel fugiat saepe quos unde voluptatibus impedit tempore similique mollitia officia vitae aliquid aperiam, atque ab. Amet commodi consectetur debitis perspiciatis possimus assumenda beatae officiis fugit esse, repellendus dolorum sed sint?</p>
                </div>



            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 p-3'>
                {recipes.map(d => <SingleRecipe key={d.r_id} data={d}></SingleRecipe>)
                }




            </div>

        </div>
    );
};

export default Recipes;