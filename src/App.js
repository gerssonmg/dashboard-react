import React from 'react';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';
import Consultas from './components/Consultas/Consultas';
import Faturamento from './components/Faturamento/Faturamento';

function App() {
  return (
    <>
      <MenuSuperior />
      <Resumo />
      <Consultas />
      <Faturamento />
    </>
  );
}

export default App;
