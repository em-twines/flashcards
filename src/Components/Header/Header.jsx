import React from 'react'
import logo from '../../Images/logo.png'


export default function Header() {



  return (
    <div>
        <div className = 'top-line'></div>
        <div className = 'logo'>
            <h2>Memory</h2>
            <img src = {logo} alt  ="Logo"></img>
            <h2>Cards</h2>
         </div>
         <div className = "line"></div>
  </div>
  )
}
