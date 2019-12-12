import React, { Component } from 'react';
import decSvg from '../assets/assets/Decoration.svg'
import Contact from "./Contact";

class AboutUs extends Component{
      render(){
            return(
                  <div className={'AboutUs'}>
                      <div className={'aboutUs_text'}><h3>O nas</h3><span><img src={"decSvg"}/></span><p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                          <span className={"signature_box"}><img src={""}/> </span></div>
                        <div className={aboutUs_pic}></div>
                  </div>
            )
      }
}

export default Contact;