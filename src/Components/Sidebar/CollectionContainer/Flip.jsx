import React from 'react';



export default function Flip({questions, setQuestions, displayPrevCard, displayNextCard, changeInequality, inequality, setInequality, prevInequality, setPrevInequality, prev, setPrev, next, setNext}) {


  function changeQuestions(){
    setQuestions(true)
    

}

  return (
    // <button type = 'button' className = 'button button-bottom-right' onClick= {()=>{setLines(false)}}><span>Flip</span></button>
    <div onClick= {()=>{(changeQuestions()) ; setPrev(false); setNext(true)}} >
      <button type = 'button' className = 'button button-bottom-right' ><span>Flip</span></button>
   </div>
  )
}
