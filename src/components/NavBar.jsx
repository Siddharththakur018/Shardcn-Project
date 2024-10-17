import React, { useState } from 'react';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [accountName, setAccountName] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const name = e.target.elements.username.value[0]; 
        setAccountName(name); 
        setIsOpen(false); 
    };

    return (
        <>
            <div className='max-w-7xl m-auto'>
                <div className='flex flex-row justify-end gap-4 items-center'>
                    <p className='cursor-pointer hover:text-blue-600 transition duration-200'>Gmail</p>
                    <p className='cursor-pointer hover:text-blue-600 transition duration-200'>Images</p>
                    {accountName ? (
                        <p className='font-bold bg-green-700 text-white rounded-full p-1 cursor-pointer inline-flex items-center'>
                            {accountName}
                        </p>
                    ) : (
                        <button 
                            className='bg-green-700 p-1 rounded-full w-10 h-10 text-white'
                            onClick={() => setIsOpen(true)}
                        >
                            S
                        </button>
                    )}
                </div>
            </div>

            {isOpen && (
                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center'>
                    <div className='bg-white p-5 rounded shadow-md'>
                        <h2 className='text-lg mb-4'>Login</h2>
                        <form onSubmit={handleLogin}>
                            <input 
                                type="text" 
                                name="username" 
                                placeholder="Enter your name" 
                                className='border border-gray-300 p-2 rounded mb-4 w-full'
                                required
                            />
                            <div className='flex justify-end'>
                                <button 
                                    type='button' 
                                    className='mr-2 text-gray-600'
                                    onClick={() => setIsOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type='submit' 
                                    className='bg-green-700 text-white p-2 rounded'
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default NavBar;
