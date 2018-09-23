import React from 'react'
import { Link } from "react-router-dom"
import '../CSS/Header.css'


const Header = (props) => {
  return(
    <div className="store">
      <img src="image/logo1.png" alt="logo"/>
      <h1>SINGLESPOT</h1>
      <Link to="/"><button><strong>Accueil</strong></button></Link>
    </div>
  )
}

export default Header
