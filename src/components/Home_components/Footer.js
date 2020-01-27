import React, { Component } from 'react';
import fbIcon from '../../assets/assets/Facebook.svg';
import instIcon from '../../assets/assets/Instagram.svg';

class Footer extends Component{
    render() {
        return(
            <div className="Footer_Content">
                <p>Copyright by Coders Lab</p>
                <span><a href="https://www.facebook.com" target="_blank"><img alt="Facebook" src={fbIcon}/></a><a href="https://www.instagram.com" target="_blank"><img alt="Instagram" src={instIcon}/></a></span>
            </div>
        )
    }
}
export default Footer