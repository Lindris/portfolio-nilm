import { useNavigate}  from "react-router-dom";
 import './Page2styles.css'
 export const Page2 = () =>
{
    const navigate=useNavigate()
   return (
     <div className="Page2">
       <div></div>
       <div className="grid-container">
         <div className="Image Box13">
           <img src="desk.png" className="desk" alt="desk"></img>
         </div>
         <h2 className='AboutMe Box14'>About Me</h2>
         <div className="Background Box11">
           <h3 className="Background-heading">Background</h3>
           <div className="Background-list Box1">
             <p>Hi, I am Ana Nilm, experienced teacher with a passion for technology.
         I am now transitioning into the field of web development.</p>
             <br></br><br></br>
             <p>I have acquired a strong foundation in HTML, CSS,
            and JavaScript through online courses and self-directed learning.</p>
             <br></br><br></br>
             <p>With my attention
            to detail and ability to problem-solve, I am committed to creating clean, user-friendly
            websites that meet the needs of clients and users. My background in teaching has
            equipped me with excellent communication and collaboration skills, which enable
            me to work effectively with teams and clients. I am excited to contribute my unique
            blend of skills and experience to create innovative web solutions.</p>
             <br></br>
           </div>
         </div>
         <div className="Expertise Box12">
           <h3 className='expertise'>Expertise</h3>
           <ul>
             <li>Bachelor's degree in Education</li><br></br><br></br>
             <br></br>
             <li>Code First Girls Bootcamp - Intro into Javascript</li><br></br><br></br>
             <br></br>
             <li>Certificate in Web Development from an accredited online program
 Completed a 12-week Full-Stack Web Development Bootcamp with a focus on JavaScript, React, and Node.js</li><br></br><br></br>
             <br></br>
             <li>Completed online courses in HTML, CSS, JavaScript, and web design from reputable providers such as Udemy and Codecademy</li><br></br><br></br>
             <br></br>
             <li>Proficient in using design tools such as Figma and Adobe XD for prototyping and mockups</li><br></br><br></br>
             <br></br>
             <li>Familiarity with Agile development methodologies and project management tools such as Trello and Asana.</li><br></br><br></br>
             <br></br>
           </ul>
         </div>
         <button className='home' onClick={()=>navigate(-1)} >Return to Home</button>
       </div>
     </div>
   );
 }