import React, { Component } from 'react';
import '../CSS/StoreList.css';
import { Link } from "react-router-dom"
//j'ai fait un fetch de l'api fournie
//Avec un map j'ai recupéré les noms des boucheries et j'ai utilisé un link pour rediriger au clic vers la page où sont les informations
// j'ai utilisé la key i du map pour faire un id et avoir les infos de la boucherie selectionnée

class StoreList extends Component {
  state={
    data:[]
  }
  componentDidMount(){
    fetch("http://static.singlespot.com/tests/la_boucherie/api/")
    .then(res => res.json())
    .then(body=>{
      this.setState({
        data:body
      })
    })
    .catch(err => {throw err})
  }


  render() {
    console.log(this.state.data);

    return (
      <div className="storelist">
        <h3>Nom:</h3>
        <div>{this.state.data.map((store, i) => {return <ul className="liste" key={i}><Link to={{
          pathname:`/details/${i}`,
          state:{data:store}
        }}><li>{store.Nom}</li></Link></ul>})}</div>
      </div>
    );
  }
}

export default StoreList;
