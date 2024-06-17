import React, { useContext,useEffect, useRef  } from 'react'
import { useState } from 'react'
import { Context } from '../../Cont'
import gemini_icon from '../../assets//gemini_icon.png'
const Main = () => {
    let[gemini,setgemini] = useState(false)

    const {input,prevPrompt,setprevPrompt,showResult,setshowResult,onSent,recentPrompt,setrecentPrompt,setInput,resultData,loading,prevRes,remove} = useContext(Context)
    

   
     function handleSearch(){
        setInput(" ")
        onSent()
     }
  

    

    const left = gemini? "left-[-600px]" : "left-[-700px]"

  return (
    <>
        <div className='bg-[#1e1f20] relative w-full text-white'>

            <div className='h-[80px]  flex justify-between items-center px-5'>
                <div className='cursor-pointer flex items-center pl-3' onClick={() => setgemini(!gemini)}>
                    <p className='bold text-xl pr-1'>Gemini</p>
                    <span class="material-symbols-outlined">arrow_drop_down</span>
                </div>
  
              {gemini? 
                 
              <div className='absolute top-16 left-[30px] p-4 bg-[#272727] rounded-lg'>
                    <div className='flex justify-between items-center p-1 py-2 hover:bg-[#4d4d4d] rounded-md'>
                        <p className='font-light-'>Gemini</p>
                        <span class="material-symbols-outlined">check_circle</span>
                    </div>
                    <div className='flex justify-between items-center p-1 py-2 hover:bg-[#4d4d4d] rounded-md'>
                        <p>Gemini Advanced</p>
                        <a className='p-2  rounded-md ml-7 bg-black text-sm ' href="">Upgrade</a>
                    </div>
                </div>
              : ""}
               



                <div className='flex items-center '>
                    <p className='text-sm p-2.5 mr-3 bg-[#444749] rounded-md hover:bg-black'> <a href="https://one.google.com/explore-plan/gemini-advanced?utm_source=gemini&utm_medium=web&utm_campaign=sidenav_evo&g1_landing_page=65" b>Try Gemini Advanced</a></p>
                    <span class="material-symbols-outlined mr-3">apps</span>
                    <span class="material-symbols-outlined mr-3">account_circle</span>
                </div>
            </div>


            <div className='relative h-[860px] flex justify-center'>
                
                
                <div className='w-3/5 relative'>


                   {!showResult ?  <span className='mt-[100px]'>
                       <h1 className='mt-[150px] text-6xl font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#4b90ff] to-[#ff5546]'>Hello, Manideep.</h1>
                       <p className='mt-[25px] text-6xl text-[#999898] font-medium'>How can I help you today?</p>
                   </span> : 
                   
                   <div className='h-[700px] overflow-y-scroll no-scrollbar'>

                    {/* <div className='flex items-center mb-5'>
                    <img src={gemini_icon} alt="" className='h-10 mr-4'/>
                   <h3 className='text-white font-semibold' > {recentPrompt} </h3>
                    </div>
                     */}
                    {/* {loading ? <div className='opacity-70'>
                        <div className='h-6 rounded-lg  bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] mb-2 animate-loader' ></div>
                        <div className='h-6 rounded-lg bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] mb-2 animate-loader'></div>
                        <div className='h-6 rounded-lg bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] mb-2 animate-loader'></div>
                    </div>: 
                    
                    <div className='flex '>
                    <span class="material-symbols-outlined mr-5 ml-1 text-3xl">account_circle</span>
                        <h3 className='text-white' dangerouslySetInnerHTML={{__html:resultData}}></h3>
                    </div>
                    } */}

                    {!remove ?<>

                       { prevRes.map((entry, index) => (
          <div key={index} className="chat-entry mb-8">
            <div className="chat-user flex items-center mb-3">  <img src={gemini_icon} alt="" className='h-10 mr-4'/><strong>{entry.user}</strong></div>
            <div className="chat-bot flex"> <span class="material-symbols-outlined mr-5 ml-1 text-3xl">account_circle</span>{entry.bot}</div>
          </div>
        ))}

                     <div className='flex items-center mb-5'>
                    <img src={gemini_icon} alt="" className='h-10 mr-4'/>
                   <h3 className='text-white font-semibold' > {recentPrompt} </h3>
                    </div> 
                    
                    <div className='opacity-70'>
                    <div className='h-6 rounded-lg  bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] mb-2 animate-loader' ></div>
                    <div className='h-6 rounded-lg bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] mb-2 animate-loader'></div>
                    <div className='h-6 rounded-lg bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] mb-2 animate-loader'></div>
                </div> </>
                
                :
                
                prevRes.map((entry, index) => (
          <div key={index} className="chat-entry mb-8" >
            <div className="chat-user flex items-center mb-3"> <img src={gemini_icon} alt="" className='h-10 mr-4'/><strong>{recentPrompt == null? entry.user : recentPrompt}</strong></div>
            <div className="chat-bot flex ">  <span class="material-symbols-outlined mr-5 ml-1 text-3xl">account_circle</span>{entry.bot}</div>
          </div>
        ))
                }

        {/* {prevRes.map((entry, index) => (
          <div key={index} className="chat-entry">
            <div className="chat-user">{entry.user}</div>
            <div className="chat-bot"> {entry.bot}</div>
          </div>
        ))} */}

                    
                   
                        
                    </div>}
                    

                   
                   <div className='absolute bottom-10 w-full h-12 rounded-full pl-5 bg-[#d3c6c65b] flex items-center'>
                    <input type="text" placeholder='Enter your prompt here' value={input} onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default form submission
            handleSearch();
          }
        }} onChange={(e) => setInput(e.target.value)} className='w-[90%] h-full bg-transparent text-white outline-none'/>
                    <span class="material-symbols-outlined text-2xl mx-2" >photo_library</span>
                    <span class="material-symbols-outlined  text-2xl mx-2 cursor-pointer" onClick={handleSearch}>search</span>

                   </div>
                   {/* <input type="text" placeholder='Enter a prompt here' className='mt-[450px] w-[900px] h-12 rounded-full pl-5'/> */}
                   
                </div>
            </div>
        </div>

    </>
  )
}

export default Main