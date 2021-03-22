import React from 'react';

function Product(props) {

  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.prodImage} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">KES {props.prodPrice}</p>
          <a href="#" className="btn btn-primary" >Add to cart</a>
        </div>
      </div>
    </div>
  );
}

export default Product;
