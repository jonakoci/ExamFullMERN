import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link, useParams} from 'react-router-dom'

function PirateList(props) {
  const [pirate, setPirate]= useState([]);
  const {update, setUpdate}= props; 
  const {id}= useParams()

  useEffect(()=>{
    axios.get("http://localhost:8000/pirates")
    .then((res)=>{
    console.log(res.data);
          setPirate(res.data);
    })
    .catch((err)=>{
          console.log(err);
    })
  }, [update])


  const handleDelete = (Itemid)=>{
    axios.delete(`http://localhost:8000/pirates/${Itemid}`)
    .then (res=>{
      setUpdate(!update);
    });
  }
  
  return(
    <div>
      <nav>
        <h1>Pirate Crew</h1>
        <Link to={"/pirate/new"} ><button className='btn btn-primary'>Add Pirate</button></Link>
      </nav>
      <div style={{background:"orange", padding:"20px"}} >
        {
          pirate.map((pirate, index) => {
            return (
            <div key={index} style={{display:"flex", justifyContent:"space-evenly", margin:"auto", marginBottom:"10px", background:"white", padding:"10px", width:"80%", alignItems:"center"}} >
              <img width='70px' height='70px' src={pirate.imgUrl}></img>
              <div>
                <h3>{pirate.name}</h3>
                <Link to={`/pirate/${pirate._id}`}> <button className='btn btn-primary m-3'>View Pirate</button></Link>
                <button className="btn btn-danger" onClick={()=>handleDelete(pirate._id)}>Walk the Plank</button>
              </div>
            </div>
          )})
        }
      </div>
    </div>
  )

}

export default PirateList
