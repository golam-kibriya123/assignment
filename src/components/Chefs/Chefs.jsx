import React, { useContext, useEffect, useState, } from 'react';

import Chef from './Chef';
import { AuthContext } from '../../providers/AuthProviders/AuthProviders';
import Sppiner from '../Spinner/Sppiner';
const Chefs = () => {
    const [dataCount, setDataCount] = useState(true);
    const changeCounter = () => {
        setDataCount(!dataCount)
    };

    const { spinner, chefs } = useContext(AuthContext);



    const lessData = dataCount ? chefs.slice(0, 6) : chefs;


    return (
        <div className="chefs mt-40 relative">
            {spinner && <Sppiner ></Sppiner>}

            <div className={`${spinner && "hidden"} text-center`}>
                <h2 className='border-b-2 border-[#6ebe3b] mb-10 text-xl md:text-2xl uppercase font-semibold md:font-bold inline-block '> they all are <span className='text-[#6ebe3b] relative'>recipe
                    <div className='h-[1.8px] w-full bg-black inline-block absolute -bottom-[4.5px] left-0 '></div> </span> makers</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 '>
                {lessData.map(chef => <Chef key={chef.id} chef={chef}></Chef>)}


            </div>
            <div className={`${spinner && "hidden"} w-full flex justify-center mt-10`}>
                <button className="btn mx-auto   bg-white border border-[#6dbe3b] hover:bg-[#6dbe3b] hover:border-[#6ebe3b] text-[#6ebe3b] hover:text-white" onClick={changeCounter}>{dataCount ? `See More` : `See Less`}</button>
            </div>
        </div>

    );
};

export default Chefs;