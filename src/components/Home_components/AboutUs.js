import React, { Component } from 'react';
import decSvg from '../../assets/assets/Decoration.svg'
import aboutUs_pic from "../../assets/assets/People.jpg"
import signature from "../../assets/assets/Signature.svg"

class AboutUs extends Component{
      render(){
            return(
                  <div className={'AboutUs'}>
                        <div className={'aboutUs_text'}>
                        <div className="aboutUs_text_box">
                        <h3>O nas</h3><span><img src={decSvg}/></span><p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                        <span className={"signature_box"}><img src={signature}/> </span>
                        </div>
                        </div>
                        <div className="aboutUs_picture"><img src={aboutUs_pic}/></div>
                  </div>
            )
      }
}

export default AboutUs;