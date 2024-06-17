import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'

function App() {
 


  return (
   <>
   <Sidebar/>
   <Main/>
   
   </>
  )
}

export default App

// // src/App.js
// import React, { useState } from 'react';
// import run from './config/api';
// function App() {
//   const [prompt, setPrompt] = useState('');
//   const [response, setResponse] = useState('');

//   const handleInputChange = (event) => {
//     setPrompt(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const result = await run(prompt);
//     setResponse(result);
//   };

//   return (
//     <div className="App">
//       <h1>Test Google Generative AI</h1>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={prompt}
//           onChange={handleInputChange}
//           rows="4"
//           cols="50"
//           placeholder="Enter your prompt here"
//         ></textarea>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       {response && (
//         <div>
//           <h2>Response</h2>
//           <p>{response}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
