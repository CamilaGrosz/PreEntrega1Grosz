import React from "react";
import './Home.css'
import { Link } from "react-router-dom";


function Home({ title }) {
    return (
        <div className="home-container">
            <h1 className="home-title">{title}</h1>
            <div className="home-content">
                <p className="home-text">
                    ¡Bienvenido a nuestra tienda de productos electrónicos! Aquí encontrarás una amplia variedad de dispositivos de última generación a precios increíbles. ¡Explora nuestra colección y elige tu favorito!
                </p>
            </div>
            <Link to={`/catalog`} className="btn-primary">Explorar Catálogo</Link>
        </div>
    );

}


export default Home;
