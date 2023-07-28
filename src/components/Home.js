import React from "react";
import './Home.css'


function Home({ title }) {
    return (
        <div className="home-container">
            <h1 className="home-title">{title}</h1>
            <p className="home-text">
                ¡Bienvenido a nuestra tienda de productos electrónicos! Aquí encontrarás una amplia variedad de dispositivos de última generación a precios increíbles. ¡Explora nuestra colección y elige tu favorito!
            </p>
        </div>
    );

}


export default Home;
