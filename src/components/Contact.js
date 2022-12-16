import React , {useState} from 'react'
import concss from './css_folder/contactcss.css'
function Contact() {
    const [name , setName] = useState('') ;
    const [email , setEmail] = useState('') ;
    const [message , setMessage] = useState('') ;
    const [out , setout] = useState(1) ;
    const [showAlert, setShowAlert] = useState(false);
    const handlesubmit = async (e) =>{
      e.preventDefault();
      
    //   await fetch(baseurl , {
    //     method:'POST',
    //     headers:{
    //         "content-Type":"application/json",
    //     },
    //     body:JSON.stringify(object)
    //  }).then(async(res)=>{
    //   const data = await res.json() ;
    //   setout(data.value);
    //   setShowAlert(true) ;
    //   console.log(data) ;
    //  }).catch(err=>{
    //   setout(-2);
    //   console.log(err) ;
    //  })
      
    //   console.log(object);
     setout(0);
    setShowAlert(true) ;
        e.target.elements.name.value = '';
        e.target.elements.email.value = '';
        e.target.elements.message.value = '';
    };

  return (
    <div>
        <section id="contact" style={concss}>

<h3 className="section-header glitch contactheading"><span className='glitch' data-text="Let's">Let's</span> <span className='glitch' data-text="Connect">Connect</span></h3>


<div className='alertshow'>
{showAlert && out === 0 ? (
        <div
          className={
            "text-white padding-5px  border-0 rounded relative mb-4 bg-green-500"
          }
        >
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize"></b> !! Aditya Connect With You Soon !!
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
      {showAlert && out !==0 ? (
        <div
          className={
            "text-white padding-5px border-0 rounded relative mb-4 bg-red-500"
          }
        >
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize"></b> !! Try After Some Time !!
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
</div>



<div className="contact-wrapper">
  <form id="contact-form" className="form-horizontal" onSubmit={handlesubmit}>

    <div className="form-group">
      <div className="col-sm-12">
        <input type="text" className="form-control" id="name" placeholder="NAME" name="name" required onChange={e=>{setName(e.target.value)}} value={name}/>
      </div>
    </div>

    <div className="form-group">
      <div className="col-sm-12">
        <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" required onChange={e=>{setEmail(e.target.value)}} value={email}/>
      </div>
    </div>

    <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required onChange={e =>{setMessage(e.target.value)}} value={message}></textarea>

    <button className="btn send-button" id="submit" type="submit" value="SEND" >
      <div className="alt-send-button">
        <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
      </div>

    </button>

  </form>


  <div className="direct-contact-container">

    <ul className="contact-list">
      <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">ABV-IIITM GWALIOR</span></i></li>

      <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(+91) 637-698-5175</a></span></i></li>

      <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">adityajainakj123@gmail.com</a></span></i></li>
      <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">bcs_2021006@iiitm.ac.in</a></span></i></li>

    </ul>

    <hr />
    {/* <ul className="social-media-list">
      <li><a href="https://github.com/adityajainakj123" target="_blank" className="contact-icon">
          <i className="fa fa-github" aria-hidden="true"></i></a>
      </li>
      <li><a href="https://www.linkedin.com/in/aditya-kumar-jain-584ba41b8/"  className="contact-icon">
      <i className="fa-brands fa-linkedin" aria-hidden="true"></i></a>
      </li>
      <li><a href="#" target="_blank" className="contact-icon">
          <i className="fa fa-twitter" aria-hidden="true"></i></a>
      </li>
      <li><a href="https://www.instagram.com/adi_jain24/" target="popup" className="contact-icon">
          <i className="fa fa-instagram" aria-hidden="true"></i></a>
      </li>
    </ul> */}
    <hr/>

    {/* <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div> */}

  </div>

</div>

</section>
    </div>
  )
}

export default Contact