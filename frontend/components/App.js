import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import { Await } from 'react-router-dom'

function App() {
  function Card ({title, text, IMGurl, date}) {
    return (
    <div>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <img src={IMGurl}></img>
      <p>{text}</p>
    </div>
    )
  }

  const [picture, setPicture] = useState()
    
  useEffect(() => {
      axios.get('http://localhost:9009/api/apod?api_key=DEMO_KEY')
      .then(data => {setPicture(data.data)})
      .catch(err => console.error(err))
    }, [])
    return (
      picture ? 
      <Card 
      title={picture.title}
      date={picture.date}
      IMGurl={picture.url}
      text={picture.explanation}
      />
      
      : <h1>Loading...</h1>
    )
}
export default App
