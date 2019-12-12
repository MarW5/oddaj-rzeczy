import React, { Component } from 'react';
import fbIcon from '../assets/assets/Facebook.svg';
import instIcon from '../assets/assets/Instagram.svg';

class Footer extends Component{
    render() {
        return(
            <div>
                <p>Copyright by Coders Lab</p><span><img src={"fbIcon"}/></span><span><img src={"instIcon"}/></span>
            </div>
        )
    }
}
export default Footer