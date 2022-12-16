import React , {useState}from 'react'
import sound from './audio.mp3'
// import glitch from '../App.css'
import linkedin from './linkedin.png'
import linktree from './linktree.webp'
import facebook from './facebook.png'
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
                        <h1 className="text-4xl tracking-wide font-semibold">
                            <h1>Hello I'm <span className='glitch' data-text="Aditya">Aditya</span> <span className='glitch' data-text="Kumar">Kumar</span> <span className='glitch'data-text="Jain">Jain</span></h1>  </h1>
                        
                        <p className="text-xl mt-4 md:mt-4 tracking-wide">Full Stack Web-Developer | UI-UX Designer | Coder</p>
                    </div>
                    <p className="mt-4 text-sm md:w-[52%] tracking-wide leading-7"></p>
                    <div className="space-x-3 mt-6 md:mt-4 contactlinkscon">
                    <div className='contactlinks'> 
                <a href="https://www.linkedin.com/in/aditya-kumar-jain-584ba41b8/" className='linkedinlink' target="_blank"><img src={linkedin} className='linkimghero'/></a>
                
                <a href="https://www.instagram.com/adi_jain24/" className='linkedinlink'  target="_blank"><img src={instagram} className='linkimghero'/></a>
                {/* <a href="https://www.facebook.com/profile.php?id=100074005880329" className='linkedinlink'  target="_blank"><img src={facebook} className='linkimghero'/></a> */}
                <a href="https://linktr.ee/adi24" className='linkedinlink'  target="_blank"><img src={linktree} className='linkimghero'/></a>
                <a href="https://github.com/adityajainakj123" className='linkedinlink'  target="_blank"><img src={github} className='linkimghero'/></a>
            
            </div>
            
                        {/* <a href="#"><i
                            className="fa-brands fa-facebook-f bg-blue-900 hover:text-blue-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center "></i>
                        </a>
                        <a href="#"><i
                            className="fa-brands fa-twitter bg-blue-900 hover:text-red-500 hover:bg-white rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/aditya-kumar-jain-584ba41b8/" target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-linkedin bg-blue-900 hover:text-yellow-500 hover:bg-white rounded-full  py-[11px] w-9 h-9 text-center"></i>
                        </a>
                        
                        <a href="#"><i
                            className="fa-brands fa-chrome bg-blue-900 hover:text-indigo-600 hover:bg-white rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></i>
                        </a> */}

                    </div>
                    <div className="flex mt-10 space-x-5">
                    {/* <div style={herocss}>
	<button className="noselect red">Darkness</button>
	<button className="noselect green">Darkness</button>
</div> */}
                        {/* <button
                            className="bg-blue-900 text-white border-2 border-white px-6 py-2 hover:brightness-105 font-semibold">Contact
                            Me</button> */}

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