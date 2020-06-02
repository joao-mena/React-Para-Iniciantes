import React, { useState, useEffect } from 'react';
import ProdutosLista from "../Components/ProdutosLista";

const Produtos = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch("https://ranekapi.origamid.dev/wp-json/api/produto?_limit=9")
            .then(response => response.json())
            .then(json => setProdutos(json));
    }, []);

    return (
        <div>
            <h1>Produtos</h1>
            {produtos.length ? (
                <ProdutosLista produtos={produtos} />
            ) : (
                    "Carregando..."
                )}
        </div>
    );
};

export default Produtos
