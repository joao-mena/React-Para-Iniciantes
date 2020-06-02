import React from "react";

const Formulario = () => {
    const [form, setForm] = React.useState({
        nome: "",
        email: "",
        mensagem: ""
    });

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.id]: event.target.value
        });
    }

    return (
        <div>
            <form action="">
                <label htmlFor="nome">Nome</label>
                <input
                    type="text"
                    id="nome"
                    value={form.nome}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                />
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                    id="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                />
                <button>Enviar</button>
            </form>
            <ul>
                <li>Nome: {form.nome}</li>
                <li>Email: {form.email}</li>
                <li>Mensagem: {form.mensagem}</li>
            </ul>
        </div>
    );
};

export default Formulario;