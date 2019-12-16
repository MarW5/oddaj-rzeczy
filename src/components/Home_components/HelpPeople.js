import React, { Component } from 'react';
import decSvg from '../../assets/assets/Decoration.svg'


class HelpPeople extends Component{
    render() {
        return(
            <div name="HelpPeople" className={"HelpPeople"}>
                <h3>Komu pomagamy?</h3>
                <span><img alt="dec_elem"src={decSvg}/></span>
                <div className="HelpPeople_filter">
                    <a href={"/"}>Fundacjom</a>
                    <a href={"/"}>Organizacją pozarządowym</a>
                    <a href={"/"}>Lokalnym zbiórkom</a>
                </div>
                <p className="HelpPeople_description">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <div className="HelpPeople_table"></div>
            </div>

        )
    }
}

export default HelpPeople;