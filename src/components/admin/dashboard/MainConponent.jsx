
import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import {useNavigate} from 'react-router-dom';
import StatsComponent from './StatsComponent';
// Main Component to display content based on selection
function MainComponent() {
  const [userName, setUserName] = useState('');
  const getUserName = () =>{
    const token = localStorage.getItem('authToken');
    if(token){
      const decoded = jwtDecode(token);
      setUserName(decoded.role);
      return decoded.id;
    }
    return '';
  }
  useEffect(() => {
    getUserName();
  });
  return(
    <>
    <Nav username={userName}/>
    <StatsComponent/>
    </>
    
      
  )
}
export default MainComponent;


const Nav  =({username})=>{
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/admin/login');
  };
  return(
    <div className="w-full bg-white border-b border-gray-200">
      <div className="flex justify-between items-center w-screen mx-auto p-4">
        <div className="text-sm font-normal  text-gray-900">RK Realtors & Consultants </div>
        <div className='flex items-center justify-center' >
          <div >
            <a href="/" target='_blank' className='text-gray-600'>
            <img src="/open-link.svg" alt="" className='size-5 mx-4 text-gray-200 hover:text-gray-800' /></a>
          </div>
        <div className="flex items-center space-x-4 ">
          <div  onClick={handleLogout} className=" hover:text-gray-900 bg-red-400 px-3 py-1.5 text-sm rounded-md text-black hover:shadow-md hover: cursor-pointer">
            Logout
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )

}