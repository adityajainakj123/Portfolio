import React from 'react'
import acss from './css_folder/aboutcss.css'
import logo from './heroimg.jpg';
function about() {
  return (
    <div className='aboutsection'>
  <h1 className='about_me'><span className='glitch' data-text="About">About</span> </h1>
  <div class="container" style={acss}>
    <img src={logo} alt="Pancake" className='heroimage' />
    <div class="container__text">
      
      <div class="container__text__star">
        {/* <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span> */}
      </div>
      <p className='text_about'>
      I'm a Computer Science Undergrad student at Indian Institute of Information Technology and Management, Gwalior.
      </p>
        <hr/>
      <p className='text_about'>I'm a very ambitious Full stack developer. I love Automating tasks. Also experienced with Natural Language Processing, Computer Vision.</p>
      <p className='text_about'>
      I'm also a competitive coder. Python is my favorite language but when it comes to competitive coding, I prefer to use C++.
      </p>
      {/* <p>I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.</p> */}
      <hr/>
      <p className='text_about'>In love with Open Source.</p>
      
      
    </div>
  </div>
    </div>
  )
}

export default about