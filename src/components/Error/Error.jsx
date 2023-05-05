import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const back = useNavigate();
    return (
        <div className='w-full h-[80vh] bg-gray-400 flex flex-col items-center'>
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?size=626&ext=jpg&ga=GA1.2.293727738.1671602860&semt=ais" alt=""
                className='h-full mx-auto' />
            <button className='btn rounded-none hover:bg-green-400' onClick={() => { back(-1) }}>
                Click me to go back</button>
        </div>
    );
};

export default Error;