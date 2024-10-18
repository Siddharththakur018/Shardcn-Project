import React, { useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { auth } from './firebase/firebase';
import { useNavigate } from 'react-router-dom'; 

const LoginPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login Successful");
            setEmail('');
            setPassword('');
            navigate('/'); 
        } catch (error) {
            alert(error.message);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Sign Up Successful");
        
            setEmail('');
            setPassword('');
            navigate('/'); 
        } catch (error) {
            alert(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            alert("Google Sign-In Successful");
            navigate('/'); 
        } catch (error) {
            alert(error.message);
        }
    };

    const handleCancel = () => {
        navigate('/'); 
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gray-200'>
            <div className='bg-white p-5 rounded shadow-md'>
                <h2 className='text-lg mb-4'>{isSignUp ? 'Sign Up' : 'Login'}</h2>
                <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className='border border-gray-300 p-2 rounded mb-4 w-full'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        className='border border-gray-300 p-2 rounded mb-4 w-full'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className='flex justify-between mb-4'>
                        <button 
                            type='button' 
                            className='text-gray-600'
                            onClick={() => setIsSignUp(!isSignUp)}
                        >
                            {isSignUp ? 'Already have an account? Login' : 'Create a new account? Sign Up'}
                        </button>
                        <button 
                            type='button' 
                            className='bg-blue-600 text-white p-2 rounded'
                            onClick={handleGoogleSignIn}
                        >
                            Sign in with Google
                        </button>
                    </div>
                    <div className='flex justify-between mb-4'>
                        <div>
                            <button 
                                type='button' 
                                className='bg-red-500 text-white p-2 rounded'
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        </div>
                        <div className='flex justify-end'>
                            <button 
                                type='submit' 
                                className='bg-green-700 text-white p-2 rounded'
                            >
                                {isSignUp ? 'Sign Up' : 'Login'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
