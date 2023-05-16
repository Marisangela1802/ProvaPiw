import React, { useState, useEffect } from 'react';

const Questao03 = () => {
    //Criei variaveis de estado para armazenar as capitais com maior e menor polulação
  const [maiorPopulacao, setMaiorPopulacao] = useState("");
  const [menorPopulacao, setMenorPopulacao] = useState("");

  useEffect(() => {
    //Fiz o fetch para obter os dados do pais
    fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
      .then(response => response.json())
      .then(data => {
        let maiorPopul = 0;
        let menorPopul = Infinity;
        let maiorPopulIndex = -1;
        let menorPopulIndex = -1;


        data.forEach((pais, index) => {
          const population = pais.population;
          //Verifico se a população atual é maior do que a maior populção
          if (population > maiorPopul) {
            maiorPopul = population;
            maiorPopulIndex = index;
          }
          //Verifico se a população atual é menor do que a menor população
          if (population < menorPopul) {
            menorPopul = population;
            menorPopulIndex = index;
          }
        });

        //Atualizo as variaveis de estado com a maior e menor população

        if (maiorPopulIndex !== -1) {
          setMaiorPopulacao(data[maiorPopulIndex].capital[0]);
        }
        if (menorPopulIndex !== -1) {
          setMenorPopulacao(data[menorPopulIndex].capital[0]);
        }
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Questão 03</h1>
      <h2>País com maior população: {maiorPopulacao}</h2>
      <h2>País com menor população: {menorPopulacao}</h2>
    </div>
  );
};

export default Questao03;
