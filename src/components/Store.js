import React from 'react'
import '../CSS/Store.css'

const Store = (props) => {
  return(
    <div className="store">
      <h5>Nom: {props.name}</h5>
    </div>
  )
}

export default Store
