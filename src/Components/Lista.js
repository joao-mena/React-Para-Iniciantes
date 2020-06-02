import React from 'react'

const Listas = () => {
    const produtos = ["Notebook", "Smartphone", "Tablet"];
    const filmes = ["Before Sunrise", "Before Sunset", "Before Midnight"];
    const livros = [
        { nome: "A Clash of Kings", ano: 1996 },
        { nome: "A Game of Thrones", ano: 1999 },
        { nome: "A Storm of Swords", ano: 2000 }
    ];
    const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];

    return (
        <div>
            <h1>Lista</h1>
            <ul>
                {produtos.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <ul>{empresas}</ul>
            <ul>
                {filmes.map(filme => (
                    <li key={filme}>{filme}</li>
                ))}
            </ul>
            <ul>
                {livros
                    .filter(livro => livro.ano > 1998)
                    .map(livro => (
                        <li key={livro.nome}>
                            {livro.nome}, {livro.ano}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Listas
