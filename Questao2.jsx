import React, { useState } from 'react';

const Questao02 = () => {
  const [virar, setVirar] = useState(false);

  const Botao = () => {
    setVirar(!virar);
  };
  //Imagens que vao ser renderizadas na pagina
  const frente = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
  const costas = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png';

  return (
    <div>
      <h1>Questão 02</h1>
      {/* No src coloquei um if em que, se apertar no botao a função setVirar é executada e se o boneco tiver de costas ele visa de frente e se tiver de frente vira de costas */}
      <img src={virar ? costas : frente} alt="Pokemon" />
      <button onClick={Botao}>Virar</button>
    </div>
  );
};

export default Questao02;
