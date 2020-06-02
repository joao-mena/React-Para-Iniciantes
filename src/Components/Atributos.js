import React from 'react'

const Atributos = () => {
    const abre = 8;
    const agora = new Date().getHours();
    const estilo = {
        color: "blue",
        fontSize: "1rem",
        fontFamily: "monospace"
    };

    function handleClick(event) {
        console.log(event);
        event.target.classList.add("aberto");

        // alert("Comprou: " + event.target.innerText);
    }

    return (
        <div>
            <h1 style={estilo}>Empresa</h1>
            <form className="container">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" />
            </form>
            <p className={agora > abre ? "aberto" : "fechado"}>Funcionamento</p>
            <button onClick={handleClick}> Clique Aqui </button>
        </div>
    );
};

export default Atributos;
