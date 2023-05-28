import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CreatePirate from './components/CreatePirate';
import Details from './components/Details';
import PirateList from './components/PirateList';
import {useState} from 'react'
import Main from './view/main';


function App() {
  const [update, setUpdate] = useState(false)


  return (
    <div className='w-75 mx-auto'>
      {/* <h1>Hello</h1> */}
      <BrowserRouter> 
      <Routes>
      <Route path='/' element={ <Main /> } /> 
        <Route path="/pirates" element={<PirateList update={update} setUpdate={setUpdate} />}/>
        <Route path= "/pirate/new" element={<CreatePirate  update={update} setUpdate={setUpdate} />} />
        <Route path= "/pirate/:id" element={<Details update={update} setUpdate={setUpdate} />} /> 
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
