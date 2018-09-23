import React from "react"

const Details = (props) => {
  console.log(props.location.state.data);
  const detail = props.location.state.data
  return(
    <div className="detail">
      <p>Nom: {detail.Nom}</p>
      <p>Adresse: {detail.Adresse1}</p>
      <p>Adresse2: {detail.Adresse2}</p>
      <p>Code postal: {detail.CP_Ville}</p>
      <p>Ville: {detail.Libelle}</p>
      <p>Téléphone: {detail.Telephone}</p>
      <p>Site web: {detail.extra}</p>
    </div>
  )
}

export default Details
