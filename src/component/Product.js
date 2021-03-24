import React, {useState} from 'react';

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(props.prodPrice);

  let product = {
    title: props.title,
    image: props.prodImage,
    total: amount,
    q: quantity
  }
  
  const addQuantity = () => {
    setQuantity(quantity + 1);
    handleAmount();
  }

 const removeQuantity = () => {
    setQuantity(quantity - 1);
    handleAmount(); 
 }

  const handleAmount = () => {
    setAmount(amount * quantity);
  }

  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.prodImage} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">KES {amount}</p>
          <div className="d-flex">
            <button href="#" className="btn btn-primary btn-sm" onClick={() => {props.prodFunc(product)}}>Add to cart</button>
              &nbsp; &nbsp; &nbsp;
            <section>
            <p><button className="btn btn-light" onClick={removeQuantity}>-</button> {quantity} <button className="btn btn-light" onClick={addQuantity}>+</button></p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
