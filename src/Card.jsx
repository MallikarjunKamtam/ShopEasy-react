import React, { useState } from "react";
import "./card.css";

function Card({ product }) {
  // function rate(rateVal) {
  //   if (Math.floor(rateVal) == 1) {
  //     return <>⭐</>;
  //   }
  //   if (Math.floor(rateVal) == 2) {
  //     return <>⭐⭐</>;
  //   }
  //   if (Math.floor(rateVal) == 3) {
  //     return <>⭐⭐⭐</>;
  //   }
  //   if (Math.floor(rateVal) == 4) {
  //     return <>⭐⭐⭐⭐</>;
  //   }
  //   if (Math.floor(rateVal) == 0) {
  //     return <>0</>;
  //   }
  // }

  function widthMethod(r) {
    return 130 * (r / 5);
  }

  function rate(ra) {
    return {
      width: widthMethod(ra),
      borderRadius: "5px",
      backgroundColor: "gold",
      border: "2px solid gold",
      height: "10px",
      padding: 0,
      margin: 0,
    };
  }

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
                <div className="rating-back">
                  <p className="item-rating" style={rate(rating)}></p>
                </div>

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
