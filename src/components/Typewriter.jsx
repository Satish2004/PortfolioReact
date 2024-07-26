import React from 'react'
// import {useTypewriter , Cursor} from 'react-simple-typewriter';



const Typewriter = () => {
    // const{text} = useTypewriter({
    //     words: [' Web developer' ,'UI/UX Designer'],
    //     loop: {},
    //     typeSpeed: 120,
    //     deleteSpeed: 80,



    // });
  return (
//    <h1 style={{margin: "50px"}}>
//     Hello Everyone I am satish
//     <span style={{fontWeight:'bold' , color:'green'}}>
//         {text}
        
//         </span> 
//         <span style={{color:"red"}}>
//             <Cursor />
//         </span>
//         <Cursor  />
        
//    </h1>

<Typewriter
option ={{
    strings: ["hello" , "world"],
    autoStart : true,
    loop: true,
}}
></Typewriter>
   
  )
}

export default Typewriter