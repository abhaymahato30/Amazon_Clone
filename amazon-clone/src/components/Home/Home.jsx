import React from "react";
import "./home.css";
import Product from "../product/Product";
import banner from "../../assets/banner.jpg"
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home_container">
          <img
            src={banner}
            alt=""
          />
          <div className="home_row" >
            <Product
              id={1}
              title="Hanes EcoSmart Fleece, Cotton-Blend Pullover, Crewneck Sweatshirt for Men, 1 Or 2 Pack"
              price={4521}
              rating={3}
              image="https://m.media-amazon.com/images/I/71fyw1U54GL._AC_SX522_.jpg"
            />
            <Product
              id={2}
              title="ASUS ROG Strix G16 (2023) Gaming Laptop, 16” 16:10 FHD 165Hz, GeForce RTX 4070, Intel Core i9-13980HX, 16GB DDR5, 1TB PCIe SSD, Wi-Fi 6E, Windows 11, G614JI-AS94, Eclipse Gray"
              price={651}
              rating={4}
              image="https://m.media-amazon.com/images/I/71v0BQo8T8L._AC_SX679_.jpg"
            />
            <Product
              id={3}
              title="Owala FreeSip Insulated Stainless Steel Water Bottle with Straw for Sports and Travel, BPA-Free, 24-oz, Blue/Teal (Denim) "
              price={551}
              rating={5}
              image="https://m.media-amazon.com/images/I/61KePAu1JAL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            />
          </div>
          <div className="home_row">
            <Product
              id={4}
              title="DANISH ENDURANCE Merino Wool Beanie for Men & Women, Knitted Winter Hat"
              price={23.96}
              rating={4}
              image="https://m.media-amazon.com/images/I/71LNStjQDpL._AC_SX425_.jpg"
            />
            <Product
              id={5}
              title="Meat Thermometer Digital, Waterproof Instant Read Meat Thermometers for Grilling and Cooking. Food Thermometer, Kitchen Gadgets, Accessories with Bottle Cap Opener for Kitchen, BBQ, Grill…"
              price={12.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/717eMW-myeL._SX466_.jpg"
            />
            <Product
              id={6}
              title="Sakugi Dish Drying Rack - X-Large Stainless Steel Dish Rack for Kitchen Counter, Kitchen Organizers and Storage for Dishes, Bowls, Cutlery, Black"
              price={651}
              rating={4}
              image="https://m.media-amazon.com/images/I/819zf0AMM2L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            />
          </div>
          <div className="home_row">
            <Product
              id={7}
              title="INSIGNIA 43-inch Class F30 Series LED 4K UHD Smart Fire TV with Alexa Voice Remote (NS-43F301NA22, 2021 Model)"
              price={651}
              rating={4}
              image="https://m.media-amazon.com/images/I/81Q0HLbeLbL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
            />
          </div>
          <div className="home_row">
            <Product
              id={8}
              title="DANISH ENDURANCE Merino Wool Beanie for Men & Women, Knitted Winter Hat"
              price={23.96}
              rating={4}
              image="https://m.media-amazon.com/images/I/31dIdIfy6GL._AC_UF226,226_FMjpg_.jpg"
            />
            <Product
              id={9}
              title="Meat Thermometer Digital, Waterproof Instant Read Meat Thermometers for Grilling and Cooking. Food Thermometer, Kitchen Gadgets, Accessories with Bottle Cap Opener for Kitchen, BBQ, Grill…"
              price={12.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/31xF+ksXkKL._AC_UF226,226_FMjpg_.jpg"
            />
            <Product
              id={10}
              title="Sakugi Dish Drying Rack - X-Large Stainless Steel Dish Rack for Kitchen Counter, Kitchen Organizers and Storage for Dishes, Bowls, Cutlery, Black"
              price={651}
              rating={4}
              image="https://m.media-amazon.com/images/I/31JKnBNL7sL._AC_SR400,600_.jpg"
            />
          </div>
        </div>
      </div>

      {/* footer */}
      
    </>
  );
};

export default Home;
