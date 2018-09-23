import React from "react"
import '../CSS/Details.css'

const Details = (props) => {
  console.log(props.location.state.data);
  const detail = props.location.state.data
  return(
    <div className="detail">
      <div className="text">
        <p><span>Nom: </span>{detail.Nom}</p>
        <p><span>Adresse: </span>{detail.Adresse1}</p>
        <p><span>Adresse2: </span>{detail.Adresse2}</p>
        <p><span>Code postal: </span>{detail.CP_Ville}</p>
        <p><span>Ville: </span>{detail.Libelle}</p>
        <p><span>Téléphone: </span>{detail.Telephone}</p>
        <p><span>Site web: </span>{detail.extra}</p>
      </div>
    </div>
  )
}

export default Details
