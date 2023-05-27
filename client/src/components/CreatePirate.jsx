import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'
import "../components/style.css"

function CreatePirate(props) {
  const {update, setUpdate}= props;
  const navigate = useNavigate()
  const [validation, setValidation] = useState({})

  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [position, setPosition] = useState("");
  const [chestsNr, setChestsNr] = useState(Number);
  const [phrase, setPhrase] = useState("");
  const [pegLeg, setPegLeg] = useState(true);
  const [eyePatch, setEyePatch] = useState(true);
  const [hookHand, setHookHand] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/pirates', {
      name,
      imgUrl,
      position,
      chestsNr,
      phrase,
      pegLeg,
      eyePatch,
      hookHand  
    })
      .then(res => {
        console.log(res.data);
        navigate("/pirates")
        setUpdate(!update)
      })
      .catch((err) => {
        setValidation(err.response.data.err.errors);
      });
  }


  return (
    <div>
      <nav >
        <h1>Add Pirate</h1>
        <Link to={"/pirates"} ><button className='btn btn-primary'>Crew Board</button></Link>
      </nav>

      <form onSubmit={submitHandler}>
        <div class="container" style={{background:"orange", padding:"20px"}}>
          <div class="row align-items-start">

            <div class="col p-4">
              <div className='form-group m-4'>
                <label>Pirate Name:</label><br/>
                <input type="text" onChange = {(e)=>setName(e.target.value)} /> <br/>
                { validation.name? validation.name.message : ""}
              </div>
              <div className='form-group m-4'>
                <label>Image URL:</label><br/>
                <input type="text" onChange = {(e)=>setImgUrl(e.target.value)}/> <br/>
                { validation.imgUrl? validation.imgUrl.message : ""}
              </div>

              <div className='form-group w-50 m-4'>
                <label># of Treasure Chests</label>
                <input type="number" class="form-control" id="input1" 
                placeholder="enter amount"onChange = {(e)=>setChestsNr(e.target.value)}></input> <br/>
                { validation.chestsNr? validation.chestsNr.message : ""}
              </div>
              <div className='form-group m-4'>
                <label>Pirate Catch Phrase:</label><br/>
                <input type="text" onChange = {(e)=>setPhrase(e.target.value)} /> <br/>
                { validation.phrase? validation.phrase.message : ""}
              </div>
            </div>


            <div class="col p-4">
              <div className='m-4'>
                <label>Crew Position</label><br/>
                <select onChange = {(e)=>setPosition(e.target.value)}>
                  <option value={"Captain"}>Captain</option>
                  <option value={"First Mate"}>First Mate</option>
                  <option value={"Quarter Master"}>Quarter Master</option>
                  <option value={"Boatswain"}>Boatswain</option>
                  <option value={"Powder Monkey"}>Powder Monkey</option>
                </select>
              </div>

              <div className='m-2'>
                <label className='m-3' >Peg Leg</label>
                <input type="checkbox" checked={pegLeg} onChange = {(e)=>setPegLeg(!pegLeg)}/> <br />
              </div>
              <div className='m-2'>
                <label className='m-3'>Eye Patch</label>
                <input type="checkbox"checked={eyePatch} onChange = {(e)=>setEyePatch(!eyePatch)} />
              </div>
              <div className='m-2'>
                <label className='m-3'>Hook Hand</label>
                <input type="checkbox" checked={hookHand} onChange = {(e)=>setHookHand(!hookHand)}/>
              </div>

              <button className="btn btn-primary m-3" type='submit'> Add Pirate </button>

            </div>
          </div>
        </div>
      </form>

    </div>

  )
};

export default CreatePirate
