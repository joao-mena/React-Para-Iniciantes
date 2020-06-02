import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Sobre">Sobre</Link></li>
                    <li><Link to="/Produtos">Produtos</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
