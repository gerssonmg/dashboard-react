import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './styles.css';

export default function Resumo() {

    const [state, setState] = useState(
        {
            consultas: {
                consultas_30dias_anteiores: 0,
                consultas_30dias_posteriores: 0,
            },
            faturamento: {
                anterior: {
                    valor: 0,
                    comparativo: 0,
                },
                previsao: {
                    valor: 0,
                    comparativo: 0,
                }
            }
        }
    )

    useEffect(() => {
        async function getResumo() {
            const response = await api.get('/resumo');
            setState(response.data);
        }
        getResumo();
    }, []);





    return (
        <div>
            <h2 className="mt-2">Resumo</h2>

            <div className="row">
                <div className="col">
                    <h3>Consultas</h3>
                    <div className="row">
                        <div className="col">
                            <div className="card mt-2 text-center">
                                <div className="card-header">
                                    30 dias anteriores
                          </div>
                                <div className="card-body">
                                    {state.consultas.consultas_30dias_anteiores}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mt-2 text-center">
                                <div className="card-header">
                                    Proximos 30 dias
                          </div>
                                <div className="card-body">
                                    {state.consultas.consultas_30dias_posteriores}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h3>Faturamento</h3>

                    <div className="row">
                        <div className="col">
                            <div className="card mt-2 text-center">
                                <div className="card-header">
                                    30 dias anteriores
                          </div>
                                <div className="card-body">
                                    {state.faturamento.anterior.valor.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    })}
                                    <span className={`badge ml-1 ${(state.faturamento.anterior.comparativo > 0 ? "badge-success" : "badge-danger")}`}>
                                        {state.faturamento.anterior.comparativo} %
                              </span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mt-2 text-center">
                                <div className="card-header">
                                    Proximos 30 dias
                          </div>
                                <div className="card-body">
                                    {state.faturamento.previsao.valor.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    })}
                                    <span className={`badge ml-1  ${(state.faturamento.previsao.comparativo > 0 ? "badge-success" : "badge-danger")}`}>
                                        {state.faturamento.previsao.comparativo} %
                              </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}