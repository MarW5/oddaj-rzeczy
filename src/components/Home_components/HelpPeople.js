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
                {id:4, name:"Fundacja “Zjedzmy Razem", description:"Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", items: "ubrania, jedzenie, ciepłe koce"},
                {id:5, name:"Fundacja “Bez jedzenia", description:"Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", items: "ubrania, jedzenie, ciepłe koce"},
                {id:6, name:"Fundacja “Bez jedzenia", description:"Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", items: "ubrania, jedzenie, ciepłe koce"},
                {id:7, name:"Fundacja “Bez jedzenia", description:"Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", items: "ubrania, jedzenie, ciepłe koce"},
                {id:8, name:"Fundacja “Bez jedzenia", description:"Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", items: "ubrania, jedzenie, ciepłe koce"},
                {id:9, name:"Fundacja “Bez jedzenia", description:"Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", items: "ubrania, jedzenie, ciepłe koce"},

            ],       
            fundationPerPage:3,
            organizations:[
                {id:1, name:"Organizacja “Lorem Ipsum 1", description:"Quis varius quam quisque id diam vel quam elementum pulvinar.", items: "Egestas, sed, tempus"},
                {id:2, name:"Organizacja “Lorem Ipsum 2", description:"Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", items: "Ut, aliquam, purus, sit, amet"},
                {id:3, name:"Organizacja “Lorem Ipsum 3", description:"Scelerisque in dictum non consectetur a erat nam.", items: "Mi, quis, hendrerit, dolor"},
                {id:3, name:"Organizacja “Lorem Ipsum 4", description:"Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", items: "Ut, aliquam, purus, sit, amet"},
                {id:4, name:"Organizacja “Lorem Ipsum 5", description:"Scelerisque in dictum non consectetur a erat nam.", items: "Mi, quis, hendrerit, dolor"}
            ],
            local_collections:[
                {id:1, name:"Zbiórka “Lorem Ipsum 1”", description:"Quis varius quam quisque id diam vel quam elementum pulvinar.", items: "Egestas, sed, tempus"},
                {id:2, name:"Ziórka “Lorem Ipsum 2", description:"Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", items: "Ut, aliquam, purus, sit, amet"},
                {id:3, name:"Organizacja “Lorem Ipsum 3", description:"Scelerisque in dictum non consectetur a erat nam.", items: "Mi, quis, hendrerit, dolor"}
            ],

            isClicked1: 1
            
        };

    }
    

    handlerClick1 = e =>{
        this.setState(state =>{
            console.log("klik 1")
            return{
                isClicked1: 1,
                
            }
        });
    }

    handlerClick2 = e =>{
        this.setState(state =>{
            console.log("klik 2")
            return{
                isClicked1 :2,
                
            }
        });
    }

    handlerClick3 = e =>{
        this.setState(state =>{
            console.log("klik 3")
            return{
                isClicked1  :3
                
            }
        });
    }
    render() {
        

        return(
            
            <div name="HelpPeople" className={"HelpPeople"}>
                    <h3>Komu pomagamy?</h3>
                    <span className= "border_decoration"><img alt="dec_elem"src={decSvg}/></span>
                    <div className="HelpPeople_filter">
                        <a onClick ={this.handlerClick1}>Fundacjom</a>
                        <a onClick ={this.handlerClick2}>Organizacją pozarządowym</a>
                        <a onClick ={this.handlerClick3}>Lokalnym zbiórkom</a>
                    </div>
                    <p className="HelpPeople_description">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                    <div className="HelpPeople_table">
                        <RenderElements local={this.state.local_collections} fundations= {this.state.fundations} organizations={this.state.organizations} click1 = {this.state.isClicked1} currentPage={this.state.currentPage} fundationPerPage={this.state.fundationPerPage}/>
                    </div>
                </div>

        )
        
    }
}

class RenderElements extends Component {
    state={
        currentPage:1,
        currentPage2:1
    }
    
    handlePageClick = (e ,i) =>{
        console.log("klik")
        this.setState({
            currentPage: i
        })
    };

    handlePageClick2 = (e ,i) =>{
        console.log("klik")
        this.setState({
            currentPage2: i
        })
    };


    render(){
        const {local} = this.props
        const {fundations} = this.props
        const {organizations} = this.props
        const {click1} = this.props
        const {fundationPerPage} = this.props
        
        
        const indexOfLast = this.state.currentPage * fundationPerPage;
        const indexOfFirst = indexOfLast - fundationPerPage;
        const currentFundation = fundations.slice(indexOfFirst, indexOfLast)

        const indexOfLastOrganization = this.state.currentPage2 * fundationPerPage;
        const indexOfFirstOrganization = indexOfLastOrganization - fundationPerPage
        const currentOrganization= organizations.slice(indexOfFirstOrganization, indexOfLastOrganization)
        
        
        const Location = local.map(item=> <li className="Elements_table"><h3>{item.name}</h3><p className="items_right">{item.items}</p><p>{item.description}</p></li>) 
        
        const Organizations = currentOrganization.map( (organization, i) => {
            return <li key = {i} className="Elements_table">
                <h3>{organization.name}</h3>
                <p className="items_right">{organization.items}</p>
                <p>{organization.description}</p></li>
                })

        const Fundations = currentFundation.map( (item, i) => {
            return <li key={i} className="Elements_table" >
                <h3>{item.name}</h3>
                <p className="items_right">{item.items}</p>
                <p>{item.description}</p></li>
                })

        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(fundations.length/fundationPerPage); i++){
            const element = <li key = {i} 
            onClick= {e=>this.handlePageClick(e, i)} 
            className={this.state.currentPage === 
            i ? "Btn_clicked" : ""}>
               {i}
                </li>
            pageNumbers.push(element)
        }


           const pageNumbers2 = [];
            for(let i = 1; i <= Math.ceil(organizations.length/fundationPerPage); i++){
            const element2 = <li key = {i} 
            onClick= {e=>this.handlePageClick2(e, i)} 
            className={this.state.currentPage2 === 
            i ? "Btn_clicked" : ""}>
               {i}
                </li>
            pageNumbers2.push(element2)
        }
        

        if(click1 === 1){
            return (

                <ul className="Fundation_name">
                {Fundations}
                <ul className="numbers">
                    {pageNumbers}
                </ul>
            </ul>
                      
                )
        }

        else if (click1 === 2 ){
            return(

                <ul className="Fundation_name">
                {Organizations}
                <ul className="numbers">
                    {pageNumbers2}
                </ul>
            </ul>
           
           )
       }
    
        else if (click1 === 3 ){
        
        return(
            <ul className="Fundation_name">
                {Location}                    
                </ul>
            )
        }

    
    }
}

export default HelpPeople;
