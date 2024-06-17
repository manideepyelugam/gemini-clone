import React, { useContext } from 'react'
import { useState } from 'react'
import { Context } from '../../Cont'

const Sidebar = () => {
    let [open,setopen] = useState(true)

    const {prevPrompt,onSent,setrecentPrompt,newChat} = useContext(Context)
    
    const width = open ? "w-[300px]" : "w-[70px]"



  const handleClick = async (prompt) => {
    setrecentPrompt(prompt)

    await onSent(prompt)
   
  }

  return (
    <>
    <div className={width}>
    <div className='w-full h-screen  bg-[#2b2c2e] text-white shadow-lg cursor-pointer flex justify-between flex-col font-body' >

        <div id='top' className=' h-5/6 pl-1'>

        <div className='h-44  flex flex-col justify-between py-5'>

            <div className=' flex items-center'>
              <span className="material-symbols-outlined text-3xl  py-2 px-3 rounded-full hover:bg-[#4d4d4d] hover:text-white" onClick={() => setopen(!open)}>menu</span>
            </div>    

             <div className=' flex items-center hover:bg-[#4d4d4d] rounded-full ' onClick={() => newChat()}>
               <span class="material-symbols-outlined text-3xl py-2 px-3 hover:bg-[#4d4d4d] hover:text-white rounded-full ">add</span> 
               
               {open? <p className='text-md px-2 py-2'>New Chat</p> : ""}
             </div>

 

        </div>

     <div id='recent' className=' h-[600px]  px-3' >
        {open? <p className='text-md font-body font-medium px-2 py-2'>Recent</p> : ""}
        
        {open? 
        
        <div className='h-[530px] overflow-y-scroll no-scrollbar'>{  prevPrompt.map((prompt,index) => (
          <div className='flex  py-3 px-4 rounded-lg hover:bg-[#4d4d4d] ' onClick={() => handleClick(prompt)} key={index}>
          <span class="material-symbols-outlined pr-2 mr-2">chat</span>
          <p className='truncate' >{prompt}</p>
          </div>
        )) }</div>
        
            
    
         : ""}
       
        

     </div>
        </div>

        <div id='bottom' className='px-3 pl-2'>

            <div className='flex py-3 items-center hover:bg-[#4d4d4d] rounded-lg pl-3'>
            <span class="material-symbols-outlined text-2xl pr-3">help</span>
            {open?<p>Help</p> : ""}
            </div>

            <div  className='flex py-3 items-center hover:bg-[#4d4d4d] rounded-lg pl-3'>
            <span class="material-symbols-outlined text-2xl pr-3">schedule</span>
            {open? <p>Activity</p>: ""}
            </div>


            <div className='flex py-3 items-center hover:bg-[#4d4d4d] rounded-lg pl-3'>
            <span class="material-symbols-outlined text-2xl pr-3">settings</span>
            {open? <p>Settings</p>: ""}
            </div>

        </div>
        
        
        </div>
        </div></>
  )
}

export default Sidebar