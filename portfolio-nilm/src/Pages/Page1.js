import React from "react"
import { useNavigate}  from "react-router-dom";
import './Page1styles.css'
export const Page1 = () =>
{
  const navigate=useNavigate()
    return(
      <div className="App">
           <div className="grid-container">
             {/* <header className="App-header"> */}
               <div className="Box1">
                 <h1>
                   Anna <br></br> Nilm
                 </h1>
               </div>
               <div className="box2">
                 <img src='girl.png' className="girl box2" alt="girl"></img>
               </div> 
               <button onClick={()=>navigate('about')}  className="about">About me</button>
               <div className="box4">
                 <h3 className='developer'>Aspiring Web Developer</h3>
               </div>
               <div className="box5">
                 <h3 className="contact">Contact Me </h3>
               </div>
               {/* </header> */}
               </div>
               </div>
    )     
}