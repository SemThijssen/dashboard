
import "./RightPane.css";
import ProductCard from "../ProductCard/ProductCard";
const RightPane = ({headerText, buttonSymbol, buttonText, productCards, onButtonClicked }) =>{
    let addProduct = () => {
      onButtonClicked();
        }

        let  onCardClicked = (idFromCard) =>{
            console.log("een van kaarten is geklikt: " + idFromCard);
        }
    let productCardsToBeRendered = productCards.map(product =>{
        if(product.name === "Placeholder"){
            return(<li key={product.id}className="productsList__item">
            <button onClick={addProduct} className="productsList__button">{buttonSymbol || "*"}</button>
            <p className="productsList__text">{buttonText || "Lorem Ipsum" } </p>
            </li>);
            }
        return <ProductCard onCardClicked={onCardClicked}key={product.id} id={product.id}name={product.name} productImg={product.img}/>
           
        
    });
    return(
        <section className="productsWrapper">
        <header className="header">
            <h1 className="header__h1">{headerText || "Placeholder"}</h1>
        </header>
        <ul className="productsList">
           {productCardsToBeRendered}
        </ul>
        </section>
    );
}

export default RightPane;