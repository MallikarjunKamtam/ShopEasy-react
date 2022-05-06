import React from "react";
import "./card.css";

function Card({ product }) {
  return (
    <>
      {product.map((item) => {
        const {
          title,
          brand,
          thumbnail,
          stock,
          rating,
          description,
          category,
          id,
          price,
        } = item;

        return (
          <div key={id} className="item-whole">
            <div className="top">
              <h2 className="item-title">{title}</h2>
              <h2 className="item-brand">{brand}</h2>
            </div>
            <div className="mid">
              <img className="item-img" src={thumbnail} alt="" />
              <div className="action">
                <button className="buy-now">Buy Now</button>
                <button className="buy-now">Add to Cart</button>
              </div>
            </div>

            <div className="bottom">
              <div className="bottom-left">
                <h2 className="item-price">Price: ${price}</h2>
                <p className="item-desc">{description}</p>
              </div>
              <div className="bottom-right">
                <p className="item-rating">{rating}</p>
                <p className="item-available">Available : {stock} only</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
