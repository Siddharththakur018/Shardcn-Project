import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='max-w-7xl m-auto'>
            <div className='flex flex-row justify-end gap-4 items-center'>
                <Link to='/gmail' className='cursor-pointer hover:text-blue-600 transition duration-200'>
                    Gmail
                </Link>
                <Link to='/images' className='cursor-pointer hover:text-blue-600 transition duration-200'>
                    Images
                </Link>
                <Link to='/login'>
                    <button className='bg-green-700 p-1 rounded-full w-10 h-10 text-white'>
                        S
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;
