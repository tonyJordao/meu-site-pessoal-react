import React from "react"
import "./Contato.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import whatsapp from "../../assets/whatsapp.png"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"


function Contato() {
    return (
    <>
    <Header></Header>
    <main>
           
           <div className="form-wrapper">
               <h3>ENTRE EM CONTATO</h3>

               <form onSubmit={event.preventDefault()}>
                   <input type="text" placeholder="Nome:" required/>
                   <input type="email" placeholder="Email:" required/>
                   <input type="tel" placeholder="Telefone:" required pattern="^\(\d{2}\) \d{5}-\d{4}$" maxLength="15"/>
                   <textarea cols="30" rows="10" placeholder="Mensagem:"></textarea> 
                   <button>ENVIAR</button>
               </form>  

               <div className="social-links">
                   <a href=""><img src={whatsapp} alt="icone do whatsapp"/></a>
                   <a href=""><img src={facebook} alt="icone do facebook"/></a>
                   <a href=""><img src={instagram} alt="icone do instagram"/></a>
               </div>
           </div>
                      
       </main>
       <Footer></Footer>
    </>
 
    )
} 
export default Contato



 