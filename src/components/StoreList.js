import React, { Component } from 'react';
import '../CSS/StoreList.css';
import { Link } from "react-router-dom"


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
        <h1>SINGLESPOT</h1>
        <h3>Nom:</h3>
        <div>{this.state.data.map((store, i) => {return <ul key={i}><Link to={{
          pathname:`/details/${i}`,
          state:{data:store}
        }}><li>{store.Nom}</li></Link></ul>})}</div>
      </div>
    );
  }
}

export default StoreList;
