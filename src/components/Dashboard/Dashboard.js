import React from "react"
import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";
import "./Dashboard.css"
import chooseImage from "../../helpers/chooseImage";
import Popup from "../Popup/Popup";
import productsObject from "../../data/products";

import navigationItemsObject from "../../data/navigationItmes";

class Dashboard extends React.Component  {

    constructor(props){
        super(props);
        this.state = {
            productCards: [],
            open: true,
            cardClicked: {},
            editMode: false,
    };
    }
    

    componentDidMount(){
       
        this.setState({productCards: productsObject.products});
    }
    
    onButtonClicked = () => {
        this.setState({open: !this.state.open})
    }
    addButtonClicked = (inputFromPopup) =>{
        let imageFromHelper =  chooseImage(inputFromPopup);
      
      let toBeAdded = [
        {
            id:this.state.productCards.length +1,
            name: inputFromPopup,
            img: imageFromHelper
        }
    ]
    
    let mergedArrays = this.state.productCards.concat(toBeAdded);
    this.setState({
        productCards: mergedArrays,
        open: !this.state.open,
    })
    }

    editButtonClicked = (inputFromPopup) => {
        let productCards = this.state.productCards;
        let newState = productCards.map(product =>{
if(this.state.cardClicked.id === product.id){
    product.name = inputFromPopup
    return product;
    
}
else{
    return product;
}    
});
       this.setState({ productCards: newState, open:true});
 }

    onCardClicked = (idFromCard) => {
        if(this.state.productCards[idFromCard - 1].name === "Placeholder"){
        this.setState({
            editMode:false,
                open: !this.state.open,
                    cardClicked: this.state.productCards[idFromCard - 1],
        });
      return;
        
            };
            this.setState({
                editMode:true,
                    open: !this.state.open,
                        cardClicked: this.state.productCards[idFromCard - 1],
            });
    }
render(){
 
    
if (this.state.open === true){
    return( <article className="dashboard">
    <LeftPane navigationListItems={navigationItemsObject.navigationItems} buttonText="Go Premium!"></LeftPane>
    <RightPane  onProductCardClicked={this.onCardClicked}onButtonClicked={this.onButtonClicked}productCards={this.state.productCards}headerText={"Mijn Producten"} buttonSymbol="+" buttonText="Voeg een product toe"></RightPane>
</article>
);
}
return (
    <Popup editButtonClicked={this.editButtonClicked}editMode={this.state.editMode} cardClicked={this.state.cardClicked}addButtonClicked={this.addButtonClicked }/>
)

}
}
export default Dashboard;