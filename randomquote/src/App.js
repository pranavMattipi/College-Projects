import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
const[quote,setQuote]=useState('');
  const fetchQuote=async()=>{
        const res = await fetch('https://api.adviceslip.com/advice');
        const data=await res.json();
        setQuote(data.slip.advice);
  }
  useEffect(()=>{fetchQuote()},[])
  return (
    <div className="container">
      <h2>Generate Quotes</h2>
      <p>Quote:{quote}</p>
      <button onClick={fetchQuote}>Generate New Quote</button>

      
    </div>
  )
}

export default App
