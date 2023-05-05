import { Link } from 'react-router-dom';

const SingleRecipe = ({ data }) => {

   
    return (
        <div className="h-48 flex bg-gray-100 text-[#6ebe3b] shadow-xl border 
border-[#6dbe3b3f]">
            <div className="w-[40%]  h-full  ">
                <img src={data.photo_url} alt="" className='w-full h-full' />
            </div>
            <div className="relative w-[60%] pt-5">
                <h2 className='font-bold  bg-[#6ebf3bc7] text-white p-1'>{data.name} </h2>
                <p className='p-1 text-[#6ebe3b]'>Description </p>
                <p className='ps-1 text-sm'> {data.cooking_method.slice(0, 70)} . . . . .</p>
                <img src={data.rating} alt="" />
                <Link to={`/recipesDetails/${data.r_id}`} className='bg-[#6ebf3bc7] hover:bg-white
                 text-gray-200
                 hover:text-[#6ebe3b] border border-gray-200   px-2  font-semibold h-9 absolute bottom-0 right-0 ' key={data.r_id}  >Details</Link>
            </div>
        </div>
    );
};

export default SingleRecipe;