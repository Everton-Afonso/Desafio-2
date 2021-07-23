import React, { useState, useEffect } from 'react';

import Button from '../../components/Button';

import "./styles.css";

export default function Products() {
    const [name, setName] = useState("");
    const [theAmount, setTheAmount] = useState("");
    const [description, setDescription] = useState("");
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const clients = JSON.parse(localStorage.getItem('clients'))
        if (clients) {
            setProduct(clients);
        }
    }, [])

    function handleClientsRegister(e) {
        e.preventDefault();

        const data = {
            name,
            theAmount,
            description
        };

        const newClient = JSON.stringify([...product || [], data]);
        localStorage.setItem('clients', newClient);
        alert(`Produto cadastrado com sucesso!`);

    }

    return (
        <>
            <div className="register-container">
                <div className="content">
                    <div className="log">
                        <h1>Cadastre seus <span>produtos</span></h1>
                    </div>
                    <form onSubmit={handleClientsRegister}>
                        <div className="input-group">
                            <input
                                placeholder="Nome do produto"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="number"
                                placeholder="Quantidade"
                                style={{ width: 150 }}
                                value={theAmount}
                                onChange={(e) => setTheAmount(e.target.value)}
                                required
                            />
                        </div>
                        <textarea
                            className="textarea"
                            placeholder="Uma breve descrição sua viajante"
                            style={{ height: 100 }}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <Button type="submit">
                            Cadastrar
                        </Button>
                    </form>
                </div>
            </div>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Quantidade</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((prod, index) => (
                            <tr key={index}>
                                <td>{prod.name}</td>
                                <td>{prod.theAmount}</td>
                                <td>{prod.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
