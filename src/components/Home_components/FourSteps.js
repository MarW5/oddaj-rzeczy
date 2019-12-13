import React, { Component } from 'react';
import decSvg from '../../assets/assets/Decoration.svg'
import Icon1 from "../../assets/assets/Icon-1.svg"
import Icon2 from "../../assets/assets/Icon-2.svg"
import Icon3 from "../../assets/assets/Icon-3.svg"
import Icon4 from "../../assets/assets/Icon-4.svg"


class FourSteps extends Component{
      render(){
            return(
                  <div className={"ForSteps"}>
                        <h2>Wystarczą 4 proste kroki</h2>
                        <span><img src={decSvg}/></span>
                        <ul className={'ForSteps_content'}>
                            <li><span><img src={Icon1}/></span><h3>Wybierz rzeczy</h3><p>ubrania, zabawki, sprzęt i inne</p></li>
                            <li><span><img src={Icon2}/></span><h3>Spakuj je</h3><p>skorzystaj z worków na śmieci</p></li>
                            <li><span><img src={Icon3}/></span><h3>Zdecyduj komu chcesz pomóc</h3><p>swybierz zaufane miejsce</p></li>
                            <li><span><img src={Icon4}/></span><h3>Zamów kuriera</h3><p>kurier przyjedzie w dogodnym terminie</p></li>
                        </ul>
                        <a href="/#">Oddaj rzeczy</a>
                  </div>
            )
      }
}

export default FourSteps;