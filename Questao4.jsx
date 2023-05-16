//Props Drilling é quando um componente so pode acessar outro componente se seu pai tiver passado para ele. Resumindo o props
//drilling passa as propriedades dos componentes como uma arvore
//Porem, com context é possivel acessar qualquer componente, sem precisar passar pelo pai.
//O contexto resolve o problema de props drilling porque o codigo não fica tão interligado entre si, ou seja, os componetes tem mais liberdade para acessar outras propriedades


//Props Drilling = so pode receber propriedade do seu pai via props
//--------------------------
//         ->
//-------------------------
//        ->
// ------------------------

//Contexto = pode pegar propriedade de qualquer componente                           
//------------     |
//-----------      |
//------------       <- // ------------------------------
//-------------    |
//---------------  |