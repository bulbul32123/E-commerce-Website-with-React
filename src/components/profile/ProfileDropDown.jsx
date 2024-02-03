import React from 'react';
import { Link } from 'react-router-dom'

export default function ProfileDropDown() {
  return (
    <>
     <div className="h-full w-full p-5 bg-black text-white">
       <ul>
        <Link to='/profile'> Profile</Link>
       </ul>
     </div> 
    </>
  )
}
