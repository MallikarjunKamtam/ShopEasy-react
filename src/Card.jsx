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
          <>
            <div key={id} className="item-whole">
              <div className="top">
                <h2 className="item-title">{title}</h2>
                <h2 className="item-brand">{brand}</h2>
              </div>
              <div className="mid">
                <img className="item-img" src={thumbnail} alt="" />
              </div>

              <div className="bottom">
                <div className="bottom-left">
                  <h3 className="item-price">Price: ${price}</h3>
                  <h5 className="item-desc">{description}</h5>
                </div>
                <div className="bottom-right">
                  <h4 className="item-rating">Rating : {rating}</h4>
                  <h4 className="item-available">Available : {stock} only</h4>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Card;
