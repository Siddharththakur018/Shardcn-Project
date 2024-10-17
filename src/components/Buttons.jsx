import React from 'react';
import { SiGooglemeet } from "react-icons/si";
import { FaGoogleDrive } from "react-icons/fa6";

function Buttons() {
    return (
        <div className='flex justify-center gap-10 mt-2 p-3'>
            <div className='flex flex-col items-center'>
                <div className='flex justify-center items-center w-10 h-10 bg-red-200 rounded-full'>
                    <SiGooglemeet className='text-2xl text-red-800'/>
                </div>
                <p className='mt-2 text-center text-gray-600'>Google Me..</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex justify-center items-center w-10 h-10 bg-red-200 rounded-full'>
                    <FaGoogleDrive className='text-2xl text-red-800' />
                </div>
                <p className='mt-2 text-center text-gray-600'>Google Dri...</p>
            </div>
        </div>
    );
}

export default Buttons;
