import React from 'react';
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { SiGooglelens } from "react-icons/si";
import Buttons from './Buttons';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaGoogleDrive } from "react-icons/fa6";

function Hero() {
    return (
        <>
            <div className='mt-5 p-3'>
                <h1 className='text-6xl text-green-500 mb-7'>Google</h1>
                <div className='flex justify-center items-center'>
                    <div className='relative'>
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input 
                            type="text" 
                            placeholder='Search' 
                            className='w-96 p-2 pl-10 font-medium border border-gray-300 rounded-full shadow-md '
                        />
                        <FaMicrophone className="absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <SiGooglelens className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                </div>
                <div>
                    <Buttons />
                </div>
                <div className='flex justify-center gap-4 mt-8'> 
                    <div>
                            <Card className='flex flex-col justify-between w-auto h-auto rounded-lg shadow-lg overflow-hidden bg-green-300 p-3 gap-1'>
                                <CardHeader>
                                    <CardTitle className="text-base text-black flex justify-between items-center"><span>Google Calendar</span> <span><FaEllipsisVertical /></span></CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow p-4 bg-green-200 rounded-lg">
                                    <div className='flex justify-between items-center gap-4'>
                                        <p>8:30</p>
                                        <p>Reconcilation</p>
                                        <p className='bg-green-100 w-32 rounded-full cursor-pointer p-1 text-black'>In progress</p>
                                    </div>
                                    <div>
                                        <p className='bg-green-700 w-40 text-white rounded-full cursor-pointer p-2'>Join Meeting</p>
                                    </div>
                                </CardContent>

                                <CardContent className="flex-grow p-4 bg-green-200 rounded-lg">
                                    <div className='flex justify-between text-sm flex-col'>
                                        <div className='flex justify-between'>
                                            <p>10:00</p>
                                            <p className='text-left w-32'>UAE Daily Standup</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <p>11:30</p>
                                            <p className='text-left w-32'>Daily Task</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <p>16:15</p>
                                            <p className='text-left w-32'>Bug Summary</p>
                                        </div>
                                        <div>
                                            <p className='flex flex-start mt-2 font-bold'>See More</p>
                                        </div>
                                    </div>
                                </CardContent>
                                
                        </Card>
                    </div>
                    <div>
                    <Card className='flex flex-col justify-between w-auto h-auto rounded-lg shadow-lg overflow-hidden bg-green-300 p-3 gap-1'>
                                <CardHeader>
                                    <CardTitle className="text-base text-black flex justify-between items-center"><span>From Your Drive</span> <span><FaEllipsisVertical /></span></CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow p-4 bg-green-200 rounded-lg">
                                    <div className='flex justify-between items-center gap-4'>
                                        <FaGoogleDrive className='text-2xl text-red-800 bg-blue-300 w-10 h-10 p-1 rounded-full' />
                                        <div className='flex flex-col text-justify'> 
                                            <p className='font-medium'>Load Your Files</p>
                                            <p className='text-sm text-gray-600'>Siddharth Thakur edited just now</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center gap-4'>
                                        <FaGoogleDrive className='text-2xl text-red-800 bg-blue-300 w-10 h-10 p-1 rounded-full' />
                                        <div className='flex flex-col text-justify'> 
                                            <p className='font-medium'>Load Your Files</p>
                                            <p className='text-sm text-gray-600'>Siddharth Thakur edited just now</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center gap-4'>
                                        <FaGoogleDrive className='text-2xl text-red-800 bg-blue-300 w-10 h-10 p-1 rounded-full' />
                                        <div className='flex flex-col text-justify'> 
                                            <p className='font-medium'>Load Your Files</p>
                                            <p className='text-sm text-gray-600'>Siddharth Thakur edited just now</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center gap-4'>
                                        <FaGoogleDrive className='text-2xl text-red-800 bg-blue-300 w-10 h-10 p-1 rounded-full' />
                                        <div className='flex flex-col text-justify'> 
                                            <p className='font-medium'>Load Your Files</p>
                                            <p className='text-sm text-gray-600'>Siddharth Thakur edited just now</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center gap-4'>
                                        <FaGoogleDrive className='text-2xl text-red-800 bg-blue-300 w-10 h-10 p-1 rounded-full' />
                                        <div className='flex flex-col text-justify'> 
                                            <p className='font-medium'>Load Your Files</p>
                                            <p className='text-sm text-gray-600'>Siddharth Thakur edited just now</p>
                                        </div>
                                    </div>

                                </CardContent>                                
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
