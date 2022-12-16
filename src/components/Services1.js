import React from 'react'
import secss from './css_folder/services1css.css'
import web from './web.svg'
import graphic from './graphics.png'
import uiux from './uiux.webp'
import branding from './branding.png'
import webdesign from './webdesign.png'
export default function Services1() {
  return (
    <div className='backgroundgif' style={secss} >
      <div className='overlay'></div>
      <div className='servicessection'>
       <h1 className=' section-header serviceheading'><span className='glitch' data-text="Services">Services</span></h1>
      <ul className="servicesholder cards">
    <li className="secard card">
      <div>
      <i class="bi bi-window"></i>
        <img classname="servicesimg"src={web} alt="web"/>
        <h3 className="secard-title card-title">Web Devlopment</h3>
        <div className="secard-content card-content">
          <p>Building and Maintenance of websites; it’s the work that happens behind the
							scenes to make a website look great, work fast and perform well with a seamless user
							experience.</p>
        </div>
      </div>
      
    </li>
    <li className="secard card">
      <div>
      <img classname="servicesimg" src={uiux} alt="UI/UX"/>
        <h3 className="secard-title card-title">UI/UX Design</h3>
        <div className="secard-content card-content">
          <p>User Interface (UI) Design focuses on anticipating what users might need to do and ensuring
							that the interface has elements that are easy to access, understand, and use to facilitate
							those actions. UI brings together concepts from interaction design, visual design, and
							information architecture.</p>
        </div>
      </div>
      
    </li>
    <li className="secard card">
      <div>
      <img classname="servicesimg"src={webdesign} alt="webdesign"/>
        <h3 className="secard-title card-title">Web Designing</h3>
        <div className="secard-content card-content">
          <p>A website design brief outlines the web design process, requirements, and
							timelines. Its purpose is to provide both parties with a clear understanding of what’s
							expected in terms of project workflow, deliverables, and post-launch services.
</p>
        </div>
      </div>
      
    </li>
    <li className="secard card">
      <div>
      <img classname="servicesimg branding"src={branding} alt="Branding"/>
        <h3 className="secard-title card-title">Branding</h3>
        <div className="secard-content card-content">
          <p>By building a website that describes what we offer, designing ads that promote
							our goods and services, selecting specific corporate colors that will be associated with our
							company, creating a logo, and featuring it across all social media accounts, thats what
							branding the company.</p>
        </div>
      </div>
      
    </li>
    <li className="secard card">
      <div>
      <img classname="servicesimg"src={graphic} alt="Graphics Designing"/>
        <h3 className="secard-title card-title">Graphics Designing</h3>
        <div className="secard-content card-content">
          <p>Graphic Design is the use of graphics, typography, graphs, and images to						communicate an idea. Graphic designers can work on both print projects and digital projects.
							Unlike Web Design, Graphic Design only concerns the creation of graphics for use on websites
							or in print.</p>
        </div>
      </div>
      
    </li>
    
  </ul>
  </div>
    </div>
  )
}
