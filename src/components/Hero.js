import React , {useState}from 'react'
import sound from './audio.mp3'
// import glitch from '../App.css'
import linkedin from './linkedin.png'
import linktree from './linktree.webp'
import instagram from './instagram.png'
import github from './github.png'
function Hero() {
    
    const [count , setcount]= useState({
        audio: new Audio(sound),
        isPlaying: false,
    });
      const playPause=()=> {
        let isPlaying = count.isPlaying;
        
        if (isPlaying) {
          count.audio.pause();
        } else {
          count.audio.play();
        }
    setcount({ audio: count.audio ,isPlaying: !isPlaying });
};

    return (
        <>
        <div className=''>
            <div className='soundplay soundhero' onClick={playPause}>
            <span > {count.isPlaying ?  <i className="fa-solid fa-pause coloraqua"></i>:<i className="fa-solid fa-play colorpink"></i>}</span>   </div></div>
        <div className='herosection'>
            
           {/* <h1 class="glitch" data-text="glitch">glitch</h1> */}
            <div className="flex justify-center p-5 md:p-16 mt-20 mb-20 lg:p-28">
                <div className="flex flex-col justify-center  max-w-7xl  text-white">
            
                
   
   <h1 className="text-base font-medium tracking-wider ">Welcome to my Personal Website</h1>
  
                    <span className="underline underline-offset-2 text-white -mt-3"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; </span>
                    <div className="flex flex-col text-white mt-5">
                        <h1 className="text-4xl tracking-widest font-semibold">
                            <span>Hello I'm</span> <span className='glitch' data-text="Aditya">Aditya</span> <span className='glitch' data-text="Kumar">Kumar</span> <span className='glitch'data-text="Jain">Jain</span></h1>
                        
                        <p className="text-xl mt-4 md:mt-4 tracking-wide">Full Stack Web-Developer | UI-UX Designer | Coder</p>
                    </div>
                    <p className="mt-4 text-sm md:w-[52%] tracking-wide leading-7"></p>
                    <div className="space-x-3 mt-6 md:mt-4 contactlinkscon">
                    <div className='contactlinks'> 
                <a href="https://www.linkedin.com/in/aditya-kumar-jain-584ba41b8/" className='linkedinlink' target="_blank" rel="noreferrer"><img src={linkedin} className='linkimghero' alt='Linkedin'/></a>
                
                <a href="https://www.instagram.com/adi_jain24/" className='linkedinlink'  target="_blank" rel="noreferrer"><img src={instagram} className='linkimghero' alt='Instagram'/></a>
                
                <a href="https://linktr.ee/adi24" className='linkedinlink'  target="_blank" rel="noreferrer"><img src={linktree} className='linkimghero' alt='Linktree'/></a>
                <a href="https://github.com/adityajainakj123" className='linkedinlink'  target="_blank" rel="noreferrer"><img src={github} className='linkimghero'
                alt='Github'/></a>
            
            </div>
            
                        
                    </div>
                    
                </div>
            </div>
            {/* <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script> */}
        </div>
        </>
    )
}

export default Hero