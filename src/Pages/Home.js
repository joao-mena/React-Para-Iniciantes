import React from 'react'

const Home = () => {
    function meuNome() {
        return "André";
    }

    function quadrado(x) {
        return x * x;
    }

    const Carro = {
        rodas: 4,
        marca: "Ford"
    };

    return (
        <div>
            <h1>Home</h1>
            {/* expressoes */}
            <p>{"MINHA EMPRESA".toLowerCase()}</p>
            <p>{30 * 2}</p>
            <p>{true}</p>
            <p>{undefined}</p>
            <p>{(() => "Função Executada")()}</p>
            <p>{meuNome()}</p>
            <p>{quadrado(2)}</p>
            <p>{quadrado(2) === 4 ? "Fórmula correta" : "Fórmula incorreta"}</p>
            <p>{Date.now()}</p>
            <p>{new Date().getFullYear()}</p>
            <p>
                Marca: {Carro.marca}, Rodas: {Carro.rodas}
            </p>
        </div>
    );
};

export default Home
