import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/PassChar';

function App() {

  let [uppercase, setUppercase] = useState(false)
  let [lowercase, setLowercase] = useState(false)
  let [number, setNumber] = useState(false)
  let [symbols, setSymbols] = useState(false)
  let [passwordlen, setPasswordLen] = useState(8)
  let [fPass, setfPass] = useState('')

  let createPassword =()=>{
    let finalPass = ''
    let charSet= "" ;
    if (uppercase || lowercase || number || symbols ) {
      if(uppercase) charSet += UC ;
      if(lowercase) charSet += LC ;
      if(number) charSet += NC ;
      if(symbols) charSet += SC
      // console.log(charSet);
      for(let i=0; i<passwordlen; i++){
      finalPass+= charSet.charAt(Math.floor(Math.random()*charSet.length) )
      }
      setfPass(finalPass);

    }
    else{
      alert("Please Check atleast one checkbox!...")
    }
  }

  let copyPass = ()=>{
    navigator.clipboard.writeText(fPass)
  }

  return (
    <div className="App">
      <div className='passwordBox'>
        <h2>Password Generator</h2>

        <div className='passwordBoxIn'> 
          <input type='text' readOnly value={fPass} />
          <button onClick={copyPass}>Copy</button>
        </div>
        
        <div className='passlength'>
          <label> Password Length</label>
          <input type='number' max={20} min={4} value={passwordlen} onChange={(event)=>setPasswordLen(event.target.value)}/>
        </div>
         
        <div className='passlength'>
          <label>UpperCase Letters</label>
          <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)} />
        </div>

        <div className='passlength'>
          <label>LowerCase Letters</label>
          <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
        </div>

        <div className='passlength'>
          <label>Numbers</label>
          <input type='checkbox' checked= {number} onChange={()=> setNumber(!number)} />
        </div>

        <div className='passlength'>
          <label>Symbols</label>
          <input type='checkbox' checked={symbols} onChange={()=> setSymbols(!symbols)} />
        </div>
        <button className='btn' onClick={createPassword}>
          Generate Password
        </button>

      </div>
    </div>
  );
}

export default App;
