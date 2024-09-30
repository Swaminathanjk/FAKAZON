import React from "react";
import "./App.css";
import "./Home.css";
import Header from "./Header.jsx";
import Product from "./Product.js";

function Home() {
  return (
    <div>
      <Header />

      <div className="app">
        <div className="home_container">
          <img
            className="homeImage"
            src="https://store-images.s-microsoft.com/image/apps.24594.13510798887500496.393115ce-aadd-41b0-a06b-6de8b907aa10.b4898b91-921e-43ef-aedc-8a0e423c95d5?mode=scale&q=90&h=720&w=1280"
            alt=""
          />
        </div>
        <div className="home_row">
          {/* product */}
          <Product
            id="42731"
            title="Rapidly Off Roader Rechargeable Remote Control Monster Truck Black Matr"
            price={3000}
            image="https://images-cdn.ubuy.co.in/63f8ed07fc7b0f43f01dafba-fast-rc-cars-1-16-scale-40-km-h-rc.jpg"
            rating={3}
          />
          <Product
            id="58492"
            title="Xbox Wireless Controller"
            price={5000}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcScULNQ9ZBOm2h8WJGH6GdNJzHBx67cHTr3a3WZemzRCoHVmWLuFpDYMR02olmqoCHeBFUEFY4oIwCCjue7OonQaPUuHsX5wkpQIHBpWLUv2iFSCc5TqzbVNvc"
            rating={5}
          />
          <Product
            id="63918"
            title="Logitech G Pro X Superlight Wireless Gaming Mouse"
            price={2200}
            image="https://m.media-amazon.com/images/I/61ykKLbddNL.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="75420"
            title='SAMSUNG Odyssey Neo G9 LS49CG954EUXXU Wide Quad HD 49" Curved VA LCD Gaming Monitor - Black'
            price={110000}
            image="https://m.media-amazon.com/images/I/71FxNbFHhpL.jpg"
            rating={4}
          />
          <Product
            id="98146"
            title="Amkette EvoFox Fireblade TKL Mechanical Wired Gaming Keyboard"
            price={3000}
            image="https://rukminim2.flixcart.com/image/1200/1200/xif0q/keyboard/gaming-keyboard/f/4/t/evofox-fireblade-led-backlit-amkette-original-imagrzmxfs5ua6pz.jpeg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="98234"
            title="Value PC"
            price={35000}
            image="https://modxcomputers.com/wp-content/uploads/2023/09/Circle-Stealth-B1-ARGB-E-ATX-Mid-Tower-Cabinet-Black.webp"
            rating={4}
          />
          <Product
            id="98765"
            title="Pro PC"
            price={70000}
            image="https://modxcomputers.com/wp-content/uploads/2024/03/Ant-Esports-205-Air-ARGB-Black.webp"
            rating={4}
          />
          <Product
            id="98412"
            title="Ultimate PC"
            price={280000}
            image="https://modxcomputers.com/wp-content/uploads/2024/05/Antec-C5-ARGB-Black.webp"
            rating={4}
          />
          <Product
            id="98443"
            title="Budget PC"
            price={20000}
            image="https://modxcomputers.com/wp-content/uploads/2022/11/Ant-Esports-250-Air-ARGB-ATX-Mid-Tower-Cabinet-Black.webp"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
