import React from "react"
import "./Projetos.css"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import FotoComercial from "../../assets/arquitetura-comercial.jpg"
import FotoResidencial from "../../assets/arquitetura-residencial.jpg"



function Projetos() { 
    return (
    <>
     <Header></Header>
        <main>
            <div className="box">
                <img src= {FotoComercial} alt="fachada de um salão de beleza"/> 
                Arquitetura Comercial
            </div>
            <div className="box">
                <img src= {FotoResidencial} alt="hall de entrada de uma casa"/> 
                Arquitetura Residencial
            </div>
        </main>''
        <Footer></Footer>
    </>

    )
}
export default Projetos


        