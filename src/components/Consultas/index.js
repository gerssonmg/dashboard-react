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
        <div></div>
    );
}