import React , { useState } from 'react'
import footercss from './css_folder/footercss.css'
import sound from './audio.mp3'
import linkedin from './linkedin.png'
import linktree from './linktree.webp'
import facebook from './facebook.png'
import instagram from './instagram.png'
import github from './github.png'


export default function Footer() {
  
    // function playsound(){
    //     audioplay.play() ;
    // }
    // function pausesound(){
    //     audioplay.pause() ;
    //     audioplay.currentTime=0;
    // }
    // useEffect(()=>{
    //     if(!count){
    //         playsound();
    //     }else {
    //         pausesound() ;
    //     }
    // }, [count])
    
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



window.onscroll = () => {
  toggleTopButton();
}
function scrollToTop(){
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleTopButton() {
  if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
    document.getElementById('back-to-up').classList.remove('d-none');
  } else {
    document.getElementById('back-to-up').classList.add('d-none');
  }
}

  
    return (
        <>
        <div className='maps' style={footercss}>
        
        
        <button className="btn btn-sm rounded-circle position-fixed bottom-0 end-0 translate-middle d-none" onClick={scrollToTop} id="back-to-up">
  <i className="fa fa-arrow-up" aria-hidden="true"></i>
</button>

            <h3 className='findme'>You Can Find me Here</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.3760221131747!2d78.17195011422213!3d26.249456894647633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6e5d32a4d53%3A0xf834069adc0c9b89!2sAtal%20Bihari%20Vajpayee%20Indian%20Institute%20of%20Information%20Technology%20and%20Management%20Gwalior!5e0!3m2!1sen!2snl!4v1670930318077!5m2!1sen!2snl" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Address'></iframe>
        </div>
        <div className='soundplay'>
            <span className='colorpink' onClick={playPause}> {count.isPlaying ? <i className="fa-solid fa-pause coloraqua" ></i>:<i className="fa-solid fa-play colorpink" ></i>}</span> {count.isPlaying ?  "Pause":"Play"} </div>
        <div className='footer' style={footercss}>
            
            
                <div className='designedby'>Designed by - <strong className='aditya'>Aditya</strong></div>
                
            <div className='contactlinks'> 
                <a href="https://www.linkedin.com/in/aditya-kumar-jain-584ba41b8/" className='linkedinlink' target="_blank" rel="noreferrer"><img src={linkedin} className='linkimg' alt='Linkedin'/></a>
                <a href="https://github.com/adityajainakj123" className='linkedinlink'  target="_blank" rel="noreferrer"><img src={github} className='linkimg' alt='Github'/></a>
                <a href="https://www.instagram.com/adi_jain24/" className='linkedinlink'  target="_blank" rel="noreferrer"><img src={instagram} className='linkimg' alt='instagram'/></a>
                <a href="https://www.facebook.com/profile.php?id=100074005880329" className='linkedinlink'  target="_blank" rel="noreferrer"><img src={facebook} className='linkimg' alt='Facebook'/></a>
                <a href="https://linktr.ee/adi24" className='linkedinlink'  target="_blank" rel="noreferrer"><img src={linktree} className='linkimg' alt='linktree'/></a>
            
            </div>
        </div>
        <div className='rightspreserved'>All Rights Preserved</div>
        <h4 className='copyright2'>CopyRight 2022</h4>
        </>
    )
}
