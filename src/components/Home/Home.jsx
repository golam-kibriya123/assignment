
import React from "react";
import SliderOne from '../Sliders/SliderOne/SliderOne';
import Country from '../Country/Country';
import Chefs from '../Chefs/Chefs';
import DontMiss from "../DontMiss/DontMiss";



const Home = () => {
    return (
        <div className='w-full '>

            <SliderOne></SliderOne>
            <Chefs></Chefs>

            <Country></Country>
            <DontMiss></DontMiss>
        </div>
    );
};

export default Home;