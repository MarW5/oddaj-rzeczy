import React, { Component } from 'react';
import decSvg from '../assets/assets/Decoration.svg'


class HelpPeople extends Component{
    render() {
        return(
            <div className={"HelpPeople"}>
                <h3>Komu pomagamy</h3>
                <span><img src={"decSvg"}/></span>
                <div><a href={"/#"}>Fundacjom</a><a href={"/#"}>Organizacją pozarządowym</a><a href={"/#"}>Lokalnym zbiórkom</a></div>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <div></div>
            </div>

        )
    }
}

export default HelpPeople;