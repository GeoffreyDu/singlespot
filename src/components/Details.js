import React from "react"

const Details = (props) => {
  return(
    <div>
      <p>{props.Nom}</p>
      <p>{props.Libelle}</p>
      <p>{props.Adresse1}</p>
      <p>{props.Adresse2}</p>
      <p>{props.CP_Ville}</p>
      <p>{props.Telephone}</p>
      <p>{props.Extra}</p>
    </div>
  )
}

export default Details
