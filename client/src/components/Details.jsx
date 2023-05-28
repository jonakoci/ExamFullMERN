import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams,Link} from "react-router-dom";

function Details(props) {
  const [pirate, setPirate]= useState({});
  const {update, setUpdate} = props; 
  const {id} = useParams()

  useEffect(() => {
    axios.get("http://localhost:8000/pirates/" + id)
        .then( res => {
            console.log(res.data);
            setPirate(res.data);
        })
        .catch( err => console.log(err) );
}, [update]);


const handleClick = (attr) => {
  axios.put("http://localhost:8000/pirates/edit/" + id, attr)
        .then( res => {
            console.log(res.data);
            setUpdate(!update)
        })
        .catch( err => console.log(err) );
}

  return (
    <div>
      <nav>
        <h1>Deep Sea Davy</h1>
        <Link to={"/pirates"} ><button className='btn btn-primary'>Crew Board</button></Link>
      </nav>
      <div class="container" style={{background:"orange", padding:"20px"}}>
        <div class="row align-items-start">
          <div class="col m-4">
            <img width='300px' height='300px' src={pirate.imgUrl}></img>
            <h1 className="m-4"> "{pirate.phrase} "</h1>
          </div>
          <div class="col m-4" style={{background:"white", padding:"20px"}}>
            <h3 className="m-3" >About: {pirate.name} </h3>
            <p> Position: {pirate.position} </p>
            <p> Treasures: {pirate.chestsNr} </p>
            <div className="d-flex justify-content-between mb-2" style={{gap:"50px"}}> 
              <p style={{flex:"1"}} >Peg Leg:</p>
              <button style={{flex:"1" ,backgroundColor: pirate.pegLeg===true ? "green" : "white" }} onClick={()=> handleClick({pegLeg: true})} > Yes </button>
              <button style ={{flex:"1" ,backgroundColor: pirate.pegLeg===false ? "red" : "white" }} onClick={()=> handleClick({pegLeg: false})}> No </button>
            </div>
            <div className="d-flex justify-content-between mb-2" style={{gap:"50px"}}>
              <p style={{flex:"1"}}>Eye Patch:</p>
              <button style={{flex:"1" ,backgroundColor: pirate.eyePatch===true ? "green" : "white" }} onClick={()=> handleClick({eyePatch: true})}> Yes </button>
              <button style ={{flex:"1" ,backgroundColor: pirate.eyePatch===false ? "red" : "white" }} onClick={()=> handleClick({eyePatch: false})}> No</button>
            </div>
            <div className="d-flex justify-content-between mb-2" style={{gap:"50px"}}>
              <p style={{flex:"1"}}>Hook Hand:</p>
              <button style={{flex:"1" ,backgroundColor: pirate.hookHand===true ? "green" : "white" }} onClick={()=> handleClick({hookHand: true})}> Yes </button>
              <button style ={{flex:"1" ,backgroundColor: pirate.hookHand===false ? "red" : "white" }} onClick={()=> handleClick({hookHand: false})}> No </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Details
