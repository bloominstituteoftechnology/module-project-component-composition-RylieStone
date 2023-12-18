import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import { styled } from 'styled-components'

function App() {
  const Styled = styled.div`
  h3 {
    display: flex;
    justify-content: center;
    font-family: Copperplate, Papyrus;
  }
  p {
    font-family: "Lucida Handwriting", "Brush Script MT";
    color: blue;
  }
  img {
    display: flex;
    justify-content: center;
    padding: 5px;
    border: 1px solid black;
  }
  `

  function Card ({title, text, IMGurl, date}) {
    return (
    <Styled>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <img src={IMGurl}></img>
      <p>{text}</p>
    </Styled>
    )
  }

  const [picture, setPicture] = useState()
    
  useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
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
