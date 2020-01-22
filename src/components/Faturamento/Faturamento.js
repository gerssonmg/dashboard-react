import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Faturamento() {

    const [state, setState] = useState([]);


    useEffect(() => {
        async function getDetails() {
            const response = await api.get('/faturamento');
            setState(response.data.detalhamento);
        }
        getDetails();
    }, []);

    return (
        <div>
            <h2 className="mt-2">Faturamento</h2>

            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            Total por forma de pagamento
                            </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Descrição</th>
                                    <th className="text-right">Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.map((item, indice) => {
                                        return (
                                            <tr key={indice}>
                                                <td>{item.descricao}</td>
                                                <td className="text-right">
                                                    {item.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                                                </td>
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