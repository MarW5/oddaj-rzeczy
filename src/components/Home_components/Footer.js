import React, { Component } from 'react';
import fbIcon from '../../assets/assets/Facebook.svg';
import instIcon from '../../assets/assets/Instagram.svg';

class Footer extends Component{
    render() {
        return(
            <div className="Footer_Content">
                <p>Copyright by Coders Lab</p>
                <span><img alt="Facebook" src={fbIcon}/><img alt="Instagram" src={instIcon}/></span>
            </div>
        )
    }
}
export default Footer