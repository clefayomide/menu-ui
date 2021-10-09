import React from "react";

const Cards = ({ menu }) => {
  const {image, name, price, info } = menu;
  return (
    <>
      <section className="card">
        <div className="flexed-child">
          <div className="menu-info-img">
            <img src={image} alt={name} className="img"/>
            <div className="menu-info">
                <div className="menu-name-price">
                    <h4 className="name">{name}</h4>
                    <h4 className="price">{price}</h4>
                </div>
                <div className="dotted-underline"></div>
                <p className="menu-info-paragraph">{info}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
