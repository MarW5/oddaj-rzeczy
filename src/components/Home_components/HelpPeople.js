import React, { Component } from 'react';
import decSvg from '../../assets/assets/Decoration.svg'



class HelpPeople extends Component{
    constructor(props) {
        super(props);
    
    

    this.state={
            fundations:[
                {id:1, name:"Fundacja Dbam o Zdrowie", description:"Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"},
                {id:2, name:"Fundacja “Dla dzieci”", description:"Cel i misja: Pomoc dzieciom z ubogich rodzin.", items: "ubrania, meble, zabawki"},
                {id:3, name:"Fundacja “Bez domu", description:"Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", items: "ubrania, jedzenie, ciepłe koce"},

            ],
            organizations:[
                {id:1, name:"Organizacja “Lorem Ipsum 1", description:"Quis varius quam quisque id diam vel quam elementum pulvinar.", items: "Egestas, sed, tempus"},
                {id:2, name:"Organizacja “Lorem Ipsum 2", description:"Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", items: "Ut, aliquam, purus, sit, amet"},
                {id:3, name:"Organizacja “Lorem Ipsum 3", description:"Scelerisque in dictum non consectetur a erat nam.", items: "Mi, quis, hendrerit, dolor"}
            ],
            local_collections:[
                {id:1, name:"Zbiórka “Lorem Ipsum 1”", description:"Quis varius quam quisque id diam vel quam elementum pulvinar.", items: "Egestas, sed, tempus"},
                {id:2, name:"Ziórka “Lorem Ipsum 2", description:"Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", items: "Ut, aliquam, purus, sit, amet"},
                {id:3, name:"Organizacja “Lorem Ipsum 3", description:"Scelerisque in dictum non consectetur a erat nam.", items: "Mi, quis, hendrerit, dolor"}
            ],

            isActive: false
        };

    }
    handlerClick = e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
        this.setState(state=>{
            
            return {
                isActive: !state.isActive
                
            }
        })        
    };

    render() {
        

        return(
            
            <div name="HelpPeople" className={"HelpPeople"}>
                    <h3>Komu pomagamy?</h3>
                    <span><img alt="dec_elem"src={decSvg}/></span>
                    <div className="HelpPeople_filter">
                        <a onClick ={this.handlerClick}>Fundacjom</a>
                        <a onClick ={this.handlerClick}>Organizacją pozarządowym</a>
                        <a onClick ={this.handlerClick}>Lokalnym zbiórkom</a>
                    </div>
                    <p className="HelpPeople_description">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                    <div className="HelpPeople_table">
                        <RenderElements local={this.state.local_collections} fundations= {this.state.fundations} organizations={this.state.organizations} isActive = {this.state.isActive}/>
                    </div>
                </div>

        )
        
    }
}

class RenderElements extends Component {
    
    render(){
        const {local} = this.props
        const {fundations} = this.props
        const {organizations} = this.props
        const {isActive} = this.props
        if (isActive === false){
            return (
                <ul className="Fundation_name">
                    {local.map(item=> <li isActive={isActive}><h3>{item.name}</h3><p className="items_right">{item.items}</p><p>{item.description}</p></li>)}    
                </ul>
                )

        }
        else if (isActive === true ){
        
        return(
            <ul className="Fundation_name">
                {fundations.map(fundation=> <li><h3>{fundation.name}</h3><p className="items_right">{fundation.items}</p><p>{fundation.description}</p></li>)}
            </ul>
            )
        }

        else if (isActive === true ){
             return(
            <ul className="Fundation_name">
                {organizations.map(organization=> <li isActive={this.state}><h3>{organization.name}</h3><p className="items_right">{organization.items}</p><p>{organization.description}</p></li>)} */}
            </ul>
            )
        }
       
    
    }
}

export default HelpPeople;
