import React, { useState } from 'react';

import CardContainer from './CardContainer'
import NextCard from './NextCard';
import AddCard from './AddCard';
import Button from 'react-bootstrap/Button';
import DeleteCard from './DeleteCard';
import EditCard from './EditCard';
import CardNumber from './CardNumber';

export default function Card({collection, cards, index, setIndex, setCards, lines, setLines , questions, setQuestions, modalShow, setModalShow, card, setCard, getCollection}) {
  return (
    <div className = 'card'>
      <CardContainer collection = {collection} setCards = {setCards}/>

      <div className = "add-button"  onClick={() => setModalShow(true)}><button className = "btn bg-transparent btn-outline-transparent btn-lg"><i class="bi bi-plus font-adjust"></i></button></div>
  
      <AddCard show={modalShow} onHide={() => setModalShow(false)} collection = {collection} cards = {cards} setCards = {setCards}/>
      
      <DeleteCard collection = {collection} cards = {cards} index = {index} getCollection = {getCollection} />

      <div className = 'card-answer'>{cards[index]?.definition}</div>
      
      <NextCard cards = {cards} setCards = {setCards} index = {index} setIndex = {setIndex} lines = {lines} setLines = {setLines} questions = {questions} setQuestions = {setQuestions} card = {card} setCard = {setCard} />      
      
      <EditCard/>
      {/* <CardNumber index = {index} cards = {cards} getCollection = {getCollection}/> */}
      <div className = 'card-number'> {index+1}/{cards.length}</div>

  </div>
  )
}
