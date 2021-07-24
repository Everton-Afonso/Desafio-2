import React from 'react';
import { Link } from 'react-router-dom'

import "./styles.css";

export default function index() {
    return (
        <>
            <div className="home-container">
                <div>
                <header>
                    <h2>Home</h2>
                    <div className="nav-link">
                        <Link to="/">
                            Clientes
                        </Link>
                        <Link to="/products">
                            Produtos
                        </Link>
                    </div>
                </header>
                </div>
            </div>
            <div className="baner">
                <div>
                    <h1>Welcome!! é um prazer ter você conosco</h1>
                    <p>Aqui você pode se cadastrar para ter um melhor controle de seus <span>produtos</span>.</p>
                </div>
            </div>
        </>
    )
}
