import React from 'react'
import CardContainer from './CardContainer'


export default function Card({collection, cards, index, setIndex, setCards} ) {

  console.log(cards[index]?.definition);

  return (
    <div className = 'card'>
      <CardContainer collection = {collection} setCards = {setCards}/>
      <div className = 'card-answer'>{cards[index]?.definition}</div>

  </div>
  )
}
