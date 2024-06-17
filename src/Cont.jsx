import { createContext,useState,useEffect } from "react";
import run from "./config/api";


export const Context = createContext()

const Contextprovider = (props) => {

    const [input,setInput] = useState("");
    const [recentPrompt,setrecentPrompt] = useState("");
    const [prevPrompt,setprevPrompt] = useState([]);
    const [showResult,setshowResult] = useState(false);
    const [loading,setloading] = useState(false);
    const [resultData,setresultData] = useState("");
    const [prevRes,setprevRes] = useState([])
    const [remove,setremove] = useState(false)

 


    const newChat = () => {
        setloading(false)
        setshowResult(false)
        setprevPrompt([])
        setprevRes([])

    }


    const onSent = async (prompt) => {
       
        setloading(true)
        setshowResult(true)
        setresultData("")
        setremove(false)
        let res;
        if(prompt !== undefined){
            res = await run(prompt)
            setrecentPrompt(prompt);
            setprevPrompt((prev) => [...prev,prompt])
            setrecentPrompt(prompt)

        }else{
            setrecentPrompt(input)
             res =  await run(input)
            setrecentPrompt(input)
            setprevPrompt((prev) => [...prev,input])
        }
      
        setremove(true)
        const newChatEntry = {user : input,bot : res};
        setprevRes((prevHistory) => [...prevHistory, newChatEntry]);
        setInput("")
        setresultData(res)
        setloading(false)
        
        
    }





   const contextvalue =  {
        input,prevPrompt,showResult,setshowResult,onSent,recentPrompt,setrecentPrompt,setInput,resultData,loading,prevRes,remove,newChat
   }



    return(
        <Context.Provider value={contextvalue}>
            {props.children}
        </Context.Provider>
    )
}


export default Contextprovider;



