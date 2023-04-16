import React from "react"
import "./Contato.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

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
                   <button onClick={enviarParaWhatsApp()}>ENVIAR</button>
               </form>  

               <div className="social-links">
                   <a href=""><img src="../assets/whatsapp.png" alt="icone do whatsapp"/></a>
                   <a href=""><img src="../assets/facebook.png" alt="icone do facebook"/></a>
                   <a href=""><img src="../assets/instagram.png" alt="icone do instagram"/></a>
               </div>
           </div>
                      
       </main>
       <Footer></Footer>
    </>
 
    )
} 
export default Contato



 