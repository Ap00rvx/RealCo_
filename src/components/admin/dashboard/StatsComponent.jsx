import React from 'react'

function StatsComponent() {
  return (
   <>
    <div className="w-full bg-gray-100">
     <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center ">
          <div className="bg-white p-4 rounded-md shadow-md">
             <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500">Total Clients</p>
                  <h1 className="text-2xl font-bold text-black">200</h1>
                </div>
                <div className='flex'>
                <div className="bg-red-300 p-4 rounded-full mx-1">
            
               
               </div>
               <div className="bg-blue-500 p-4 rounded-full ">
               
                </div>
                </div>
                
                
             </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
             <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500">Total Projects</p>
                  <h1 className="text-2xl font-bold text-black">200</h1>
                </div>
                <div className="bg-blue-500 p-4 rounded-full">
                  
                </div>
             </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
             <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500">Total Days of Work</p>
                  <h1 className="text-2xl font-bold text-black">1000</h1>
                </div>
                <div className="bg-blue-500 p-4 rounded-full">                
                </div>
             </div>
          </div>
          \
        </div>
    </div>
    </div>
   </>
  )
}

export default StatsComponent