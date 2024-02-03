import React from 'react';
import Img from '../Img'
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from '../Spinner';

export default function Profile() {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div className='text-white text-center font-extrabold text-xl'><Spinner /></div>;
    }
    return (
        <div className='md:absolute md:top-16 md:right-3 w-full md:h-full rounded-md text-white'>
            <div className="bg-green-500 p-5 flex justify-center items-center flex-col rounded-md w-full">
                <Img src={user?.picture || '/images/Logo.jpg'} alt={user?.nickname || 'Guest'} className='rounded-full border  h-20 w-20  object-cover object-center' />
                <h2 className='text-sm'>{user?.nickname || 'Guest'}</h2>
                <h3 className='text-xs text-gray-300 mb-5 text-wrap'>{user?.email || 'guest369@gmail.com'}</h3>
                {isAuthenticated ? (
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='py-2 px-4 bg-red-500 text-white rounded-md'>Log Out</button>
                ) : (
                    <button onClick={() => loginWithRedirect()} className='py-2 px-4 bg-red-500 text-white rounded-md'>Log In</button>
                )
                }
            </div>
        </div>
    )
}
