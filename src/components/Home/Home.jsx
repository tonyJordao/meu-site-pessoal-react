import React from "react"
import "./Home.css"
import about from "../../assets/fotodoabout.jpg"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function Home() {
    return (
    <>
     <Header></Header>
        <main>
            <img src={about} alt="foto do about"/>

            <div className="text-wrapper">
                <h5>QUEM SOMOS</h5>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
        </main>
        <Footer></Footer>
    </>
    )

}
export default Home
 