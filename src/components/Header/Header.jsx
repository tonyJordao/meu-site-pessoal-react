import React from "react";
import "./Header.css"
import logomarca from "../../assets/LOGOMARCA.jpg"
function Header() {

    return (
        <>
         <header>
         <img src={logomarca} alt="Logomarca do arquiteto contendo seu nome e ramo de atividade"/>
      <h1>TONY JORDÃO ARQUITETURA</h1>
   

        <nav className="menu-de-navegacao">
            
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/projetos">PROJETOS</a></li>
                <li><a href="/contato">CONTATO</a></li>
            </ul>
        </nav>
    </header>
        </>
    )

}
export default Header 