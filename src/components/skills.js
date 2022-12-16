import React from 'react'
import acss from './css_folder/skillscss.css'
import c_plus from './c_plus.jpg'
import c_lan from './clan.jpg'
import mongoose from './mongoose.jpg'
import express from './express.jpg'
import sql from './sql.jpg'
import postgresql from './postgersql.jpg'
import heroku from './heroku.jpg'
import netlify from './netlify.jpg'
import linux from './linux.jpg'
import git from './git.jpg'
import ubuntu from './ubuntu.jpg'
function skills() {
  return (
    <div className='skills_container'>
      <h1 className='skills_head'><span className='glitch' data-text="Skills">Skills</span></h1>
      


      <div className='skillsbc'>
      <h3 className='techiknow'>Tech's I Know </h3>
      <div class="main-wrapper" style={acss}>
        <div class="badge blue">
          <div class="circle"> <img src={c_plus} alt="c++" title='C++' /></div>
        </div>
        <div class="badge blue-dark">
          <div class="circle"> <img src={c_lan} alt="C" title='C' /></div>
        </div>
        <div class="badge yellow">
          <div className='circle'> <i class="fa-brands fa-4x fa-html5" title='HTML'></i></div>
        </div>
        <div class="badge orange">
          <div class="circle"> <i class="fa-brands fa-4x fa-css3" title='CSS'></i></div>
        </div>
        <div class="badge pink">
          <div class="circle"> <i class="fa-brands fa-4x fa-js" title='Javascript'></i></div>
        </div>
        <div class="badge red">
          <div class="circle"> <i class="fa-brands fa-4x fa-react" title='React Js'></i></div>
        </div>
        {/* <br/> */}
        <div class="badge purple">
          <div class="circle"><img src={express} alt="Express" title='Express' /> </div>
        </div>
        <div class="badge teal">
          <div class="circle"> <i class="fa-brands fa-4x fa-node-js" title='Node Js'></i></div>
        </div>

        <div class="badge green">
          <div class="circle"><img src={sql} alt="sql" title='MYSQL' /></div>
          
        </div>
        <div class="badge green-dark">
          <div class="circle"><img src={mongoose} alt="mongoose" title='Mongoose' /></div>
          
        </div>
        <div class="badge green-dark">
          <div class="circle"><img src={postgresql} alt="postgresql" title='PostgreSQL' /></div>
          
        </div>
        {/* <br/> */}
        <div class="badge teal">
          <div class="circle"> <i class="fa-brands fa-4x fa-github" title='Github'></i></div>
         
        </div>

        <div class="badge purple">
          <div class="circle"><img src={git} alt="Git" title='Git' /> </div>
          
        </div>
        <div class="badge silver">
          <div class="circle"> <img src={netlify} alt="netlify" title='Netlify' /></div>
        </div>
        <div class="badge gold">
          <div class="circle"> <img src={linux} alt="linux" title='Linux' /></div></div>
          <div class="badge yellow">
          <div className='circle'> <img src={ubuntu} alt="Ubuntu" title='Ubuntu' /></div>
      
        </div>
        <div class="badge teal">
          <div class="circle"> <img src={heroku} alt="heroku" title='Heroku' /></div>
          
        </div>

      </div>
      </div>
    </div>
  )
}

export default skills