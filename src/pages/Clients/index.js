import React, { useState, useEffect } from 'react';

import Button from '../../components/Button';

import "./styles.css";

export default function Clients() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");
    const [address, setAddress] = useState("");
    const [peaples, setPeaples] = useState([]);

    useEffect(() => {
        const clients = JSON.parse(localStorage.getItem('clients'));
        if (clients) {
            setPeaples(clients);
        }
    }, [])

    function handleClientsRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            city,
            uf,
            address,
        };

        const newClient = JSON.stringify([...peaples || [], data]);
        localStorage.setItem('clients', newClient);

        alert(`Cliente cadastrado com sucesso!`);
        window.location.reload();

    }

    return (
        <>
            <div className="register-container">
                <div className="content">
                    <div className="log">
                        <h1>Cadastre-<span>se</span></h1>
                    </div>
                    <form onSubmit={handleClientsRegister}>
                        <input
                            placeholder="Nome completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div className="input-group">
                            <input
                                placeholder="Cidade"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                            <input
                                placeholder="Uf"
                                style={{ width: 80 }}
                                maxLength="2"
                                value={uf}
                                onChange={(e) => setUf(e.target.value)}
                                required
                            />
                        </div>
                        <input
                            placeholder="Endereço"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
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
                            <th>E-mail</th>
                            <th>Cidade</th>
                            <th>Uf</th>
                            <th>Endereço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {peaples.map((peaple, index) => (
                            <tr key={index}>
                                <td>{peaple.name}</td>
                                <td>{peaple.email}</td>
                                <td>{peaple.city}</td>
                                <td>{peaple.uf}</td>
                                <td>{peaple.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
