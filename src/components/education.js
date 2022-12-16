import React from 'react'
import acss from './css_folder/educationcss.css'
function education() {
  return (
    <div className='edusection'>
      <div className='overlay'></div>
        <div class="timeline" style={acss}>
  <div class="entry">
    <div class="title">
      <h3>2022 - Present</h3>
      {/* <p>Gwalior</p> */}
    </div>
    <div class="body">
      <p>Atal Bihari Vajpayee Indian Institute of Information Technology and Management, Gwalior</p>
      <ul>
        <li>December 2021 - Present</li>
        <li> 2nd Year Student Of Branch Computer Science And Engineering</li>
        {/* <li></li> */}
      </ul>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3>2018 - 20</h3>
      <p></p>
    </div>
    <div class="body">
      <p>Little Children Montesary SR. SEC. School Dholpur</p>
      <ul>
        <li> May 2018 - June 2020</li>
        <li>10th Percentage - 95% ( District Topper )</li>
        <li>12th Percentage - 91.6% ( School Topper )</li>
      </ul>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3>2005 - 18</h3>
      <p></p>
    </div>
    <div class="body">
      <p>Adarsh Vidhya mandir Rajakhera , Dholpur</p>
      <ul>
      <li> July 2005 - April 2018</li>
        <li>8th School Topper</li>
        
      </ul>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3>24 September </h3>
      <p></p>
    </div>
    <div class="body">
      <p>Born</p>
      <ul>
        <li>24 September 2002</li>
        <li>Wish me on 24th September</li>
      </ul>
    </div>
  </div>

</div>
    </div>
  )
}

export default education