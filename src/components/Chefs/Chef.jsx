import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { GiCampCookingPot } from 'react-icons/gi';
import { Link } from 'react-router-dom';
const Chef = (props) => {
    const chef = props.chef;
    const { name, image_url, no_recipes, likes, experience, id } = chef;
    return (
        <div className="card shadow-xl  border border-[#6dbe3b] 
        text-[#6dbe3b] mx-auto">
            <figure><img src={image_url
            } alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <p>{no_recipes} years of experience</p>
                <p className='relative inline '>{experience}  Recipes <GiCampCookingPot className='absolute top-0 inline text-xl ps-1' /></p>
                <p className='relative inline '>Likes {likes
                } <AiFillLike className='absolute top-0 inline text-xl ps-1' /></p>
                <div className="card-actions justify-end">
                    <Link to={`/recipes/${id}`} className="btn btn-primary bg-white border border-[#6dbe3b] hover:bg-[#6dbe3b] hover:border-[#6ebe3b] text-[#6ebe3b] hover:text-white">Recipes</Link >
                </div>
            </div>
        </div>
    );
};

export default Chef;