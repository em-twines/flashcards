import React, { useState , useEffect} from 'react';

export default function NextCard({cards, setCards, card, setCard, index, setIndex, questions, setQuestions, displayPrevCard, displayNextCard, changeInequality, inequality, setInequality, prevInequality, setPrevInequality, prev, setPrev, next, setNext}) {



  useEffect(() => {
    changeInequality();
  }, [])
  


console.log(prev, next)
  return (
    <div className = 'button-box'>

        {prev ? ( 
          prevInequality ? (
          <button onClick={() => { displayPrevCard()}} className = 'prev-button'><span>Previous</span></button>
          ):(
          <button onClick={() => {setCard(cards[index]) ; setPrev(false)}} className = 'prev-button'><span>Previous</span></button>)
        ):(
        <button className = 'prev-button-transparent'><span>Previous</span></button>)}  


      {next ? ( 
        inequality ? (
        <button onClick={() => { displayNextCard()}} className = 'next-button'><span>Next</span></button>
        ):(
        <button onClick={() => {setCard(cards[index]) ; setNext(false)}} className = 'next-button'><span>Next</span></button>)
      ):(
      <button className = 'next-button-transparent'><span>Next</span></button>)}
      
    </div>
  )
}
