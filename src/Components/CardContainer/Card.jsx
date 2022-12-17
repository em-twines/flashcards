import React from 'react'
import CardContainer from './CardContainer'
import NextCard from './NextCard';


export default function Card({collection, cards, index, setIndex, setCards, lines, setLines , questions, setQuestions} ) {

  return (
    <div className = 'card'>
      <CardContainer collection = {collection} setCards = {setCards}/>
      <div className = 'card-answer'>{cards[index]?.definition}</div>
      <NextCard cards = {cards} setCards = {setCards} index = {index} setIndex = {setIndex} lines = {lines} setLines = {setLines} questions = {questions} setQuestions = {setQuestions}/>
  </div>
  )
}
