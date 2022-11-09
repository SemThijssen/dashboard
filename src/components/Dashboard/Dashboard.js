import React from "react"
import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";
import "./Dashboard.css"
import disneycastleImage from "../../img/pexels-benjamin-suter-2362002.jpg";
import pinnochioImage from "../../img/pinnochio.jpeg";
import Popup from "../Popup/Popup";
import WaltandMickeyImage from"../../img/pexels-david-guerrero-8183995.jpg";
import WaltStarImage from"../../img/pexels-ekaterina-belinskaya-4700140.jpg";


class Dashboard extends React.Component  {

    constructor(props){
        super(props);
        this.state = {productCards: [], open: true};
    }

    

    componentDidMount(){
        let productCards = [
            {
                id: 1,
                name:"Placeholder"
        
            },
            {
                id: 2,
                name:"Disney Castle",
                img: disneycastleImage
            },
            {
                id: 3,
                name:" Pinnochio" , 
               img: pinnochioImage
            },
            {
                id: 4,
                name:" Pinnochio" , 
               img: pinnochioImage
            } 
        ];
        this.setState({productCards: productCards});
    }
    
    onButtonClicked = () => {
        this.setState({open: !this.state.open})
    }
    addButtonClicked = (inputFromPopup) =>{
        let toBeAddedImage;
      switch(inputFromPopup){
        case("Pinnochio"):
        toBeAddedImage = pinnochioImage;
        break;
        case("Disney Kasteel"):
        toBeAddedImage = disneycastleImage;
        break;
        case("Walt en Mickey"):
        toBeAddedImage = WaltandMickeyImage;
        break;
        default:
        toBeAddedImage = WaltStarImage;
        break;
      }
      let toBeAdded = [
        {
            name: inputFromPopup,
            img: toBeAddedImage
        }
    ]
    
    let mergedArrays = this.state.productCards.concat(toBeAdded);
    this.setState({
        productCards: mergedArrays,
        open: !this.state.open,
    })
    }
render(){
    let navigationListItems =
    [
        {
            name: "Home",
            message: 0,
        },
        {
            name: "facturen",
            message: 3,
        },
        {
            name: "Bestellingen",
            message: 0,
        },
        {
            name: "Retour",
            message: 1,
        },
        {
            name: "Contact",
            message: 2,
        },
        
];
if (this.state.open === true){
    return( <article className="dashboard">
    <LeftPane navigationListItems={navigationListItems} buttonText="Go Premium!"></LeftPane>
    <RightPane onButtonClicked={this.onButtonClicked}productCards={this.state.productCards}headerText={"Mijn Producten"} buttonSymbol="+" buttonText="Voeg een product toe"></RightPane>
</article>
);
}
return (
    <Popup addButtonClicked={this.addButtonClicked }/>
)

}
}
export default Dashboard;