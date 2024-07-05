import React, { useEffect, useState } from 'react';
import './App.css';
import api from "./services/api";

function App() {
  const [advice, setAdvice] = useState("");

  // Função para buscar um novo conselho da API
  const fetchAdvice = () => {
    const randomParam = Math.random(); // Adiciona um parâmetro aleatório
    api.get(`/advice?random=${randomParam}`)
      .then((response) => {
        setAdvice(response.data.slip.advice);
      })
      .catch((err) => {
        console.error("Ops! Ocorreu um erro ao buscar o conselho: " + err);
      });
  };

  // useEffect para buscar o conselho inicial ao carregar o componente
  useEffect(() => {
    fetchAdvice();
  }, []);

  // Função para lidar com o clique no botão "Get New Advice"
  const handleNewAdvice = () => {
    fetchAdvice(); // Chama a função fetchAdvice para buscar um novo conselho
  };

  return (
    <div className="App">
      <h1>Advice App</h1>
      <p>Advice: {advice}</p>
      <button onClick={handleNewAdvice}>Get New Advice</button>
    </div>
  );
}

export default App;
