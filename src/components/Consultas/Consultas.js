import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Consultas() {
    const [state, setState] = useState({
        realizadas: [],
        marcadas: [],
    });

    useEffect(() => {
        async function getConsultas() {
            const response = await api.get('/consultas');
            setState(response.data);
        }
        getConsultas();
    }, []);

    return (
        <div>
            <h2 className="mt-2">Consultas</h2>

            <div className="row">
                <div className="col">
                    <div className="card mt-2">
                        <div className="card-header">
                            Realizadas
                            </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Especialidade</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.realizadas.map((item, indice) => {
                                        return (
                                            <tr key={indice}>
                                                <td>{item.especialidade}</td>
                                                <td>{item.quantidade}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col">
                    <div className="card mt-2">
                        <div className="card-header">
                            Marcadas
                            </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Especialidade</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.marcadas.map((item, indice) => {
                                        return (
                                            <tr key={indice}>
                                                <td>{item.especialidade}</td>
                                                <td>{item.quantidade}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}