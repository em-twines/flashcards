import React from 'react'
import Collection from './Collection'


export default function Flip({noLines, setLines}) {
  return (
    <button type = 'button' className = 'button button-bottom-right' onClick= {()=>{setLines(false)}}><span>Flip</span></button>
  )
}
