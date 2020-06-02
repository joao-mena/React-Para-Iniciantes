import React from "react";

// O props virá como um objeto contendo
// todas as propriedades passadas no componente
const ProdutosLista = props => {
    return (
        <div>
            {props.produtos.map(produto => (
                <div key={produto.id}>
                    <h1>{produto.nome}</h1>
                    <img src={produto.fotos[0].src} alt={produto.fotos[0].alt} />
                </div>
            ))}
        </div>
    );
};

export default ProdutosLista;