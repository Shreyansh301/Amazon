import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_conatainer">
        <img className="home_image" src="banner.jpeg" alt="" />

        <div className="home_row">
          <Product
            title="Samsung Galaxy Tab"
            price={21999}
            rating={5}
            image="samsung.jpg"
          />
          <Product
            id = ""
            title="JBL Partybox BluetoothvSpeaker"
            price={18999}
            rating={5}
            image="jbl.jpg"
          />
        </div>

        <div className="home_row">
        <Product
            id = ""
            title="Apple iPhone 13 (128GB) - Midnight"
            price={52999}
            rating={5}
            image="applei13.jpg"
          />
          <Product
            id = ""
            title="Apple iPad (10th Generation)"
            price={38900}
            rating={5}
            image="appleipad.jpg"
          />
          <Product
            id = ""
            title="Sony Alpha ILCE Digital SLR Camera"
            price={141489}
            rating={5}
            image="sonyalpha.jpg"
          />
        </div>

        <div className="home_row">
        <Product
            id = ""
            title="Nasher Miles Mexico Hard-Sided Polycarbonate Luggage Set of 3"
            price={13497}
            rating={5}
            image="Nasherbag.jpg"
          />  
        </div>
      </div>
    </div>
  );
}

export default Home;
