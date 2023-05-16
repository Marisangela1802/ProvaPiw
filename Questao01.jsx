import React, { useState, useEffect } from 'react';

const Questao01A = () => {
  const alunos = [
    { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
    { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
    { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } }
  ];
  //Constante com os estados da variavel medias
  const [medias, setMedias] = useState([]);

  

  return (
    <div>
      <h1>Questão01A</h1>
      {/* Questao1B recebe a lista alunos via props */}
      <Questao01B alunos={alunos} />
    </div>
  );
};

function Questao01B(props) {
  const alunos  = props;
 //Função em que é calculado a media de cada aluno utilizando map
    const CalcularMedia = () => {
        const medias = alunos.map((alunos)=>{
            const {ap1, ap2} = alunos.notas
            const resultado = (ap1 + ap2)/2
            return resultado
    }
        
    
    )
    return medias    
    }

    


  return (
    <div>
      <h1>Questão01B</h1>
    </div>
  );

}

export default Questao01A;
