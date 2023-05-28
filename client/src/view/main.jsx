import React from 'react'
import axios from 'axios';
import Registration from './Registration';
import Login from './Login';

function Main() {
  return (
    <div>
    <h1>Welcome to Pirate Crew </h1>
      <div className='d-flex justify-content-between'>
          < Registration />
          < Login />
      </div>
    </div>
  )
}

export default Main; 
