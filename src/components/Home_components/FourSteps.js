import React, { Component } from 'react';
import decSvg from '../../assets/assets/Decoration.svg'
import Icon1 from "../../assets/assets/Icon-1.svg"
import Icon2 from "../../assets/assets/Icon-2.svg"
import Icon3 from "../../assets/assets/Icon-3.svg"
import Icon4 from "../../assets/assets/Icon-4.svg"

class FourSteps extends Component{
      render(){
            return(
                  <div name="FourSteps" className={"FourSteps"}>
                        <h2>Wystarczą 4 proste kroki</h2>
                        <span className="border_decoration"><img alt="dec_elem" src={decSvg}/></span>
                        <div className="FourSteps_background">
                              <ul className={'FourSteps_content'}>
                              <li className="things_to_gives"><span className="things_icons"><img alt="T_shirt" src={Icon1}/></span><h3>Wybierz rzeczy</h3><p>ubrania, zabawki, sprzęt i inne</p></li>
                              <li className="things_to_gives"><span className="things_icons"><img alt="Bag_icon" src={Icon2}/></span><h3>Spakuj je</h3><p>skorzystaj z worków na śmieci</p></li>
                              <li className="things_to_gives"><span className="things_icons"><img alt="loupe" src={Icon3}/></span><h3>Zdecyduj komu chcesz pomóc</h3><p>swybierz zaufane miejsce</p></li>
                              <li className="things_to_gives"><span className="things_icons"><img alt="courier" src={Icon4}/></span><h3>Zamów kuriera</h3><p>kurier przyjedzie w dogodnym terminie</p></li>
                              </ul>
                        </div>
                        <a className="gives_things_button" href="/logowanie">Oddaj rzeczy</a>
                  </div>
            )
      }
}

export default FourSteps;