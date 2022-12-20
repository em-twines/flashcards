import React, { useState, useEffect } from 'react';

import CardContainer from './CardContainer'
import NextCard from './NextCard';
import AddCard from './AddCard';
import Button from 'react-bootstrap/Button';
import DeleteCard from './DeleteCard';
import EditCard from './EditCard';
import CardNumber from './CardNumber';

export default function Card({collection, cards, index, setIndex, setCards, lines, setLines , questions, setQuestions, modalShow, setModalShow, card, setCard, getCollection, displayNextCard, displayPrevCard, changeInequality, inequality, setInequality, prevInequality, setPrevInequality, prev, setPrev, next, setNext}) {




  return (
    <div className = 'card'>

      <CardContainer collection = {collection} setCards = {setCards}/>

      <div className = "add-button"  onClick={() => setModalShow(true)}><button className = "btn bg-transparent btn-outline-transparent btn-lg"><i class="bi bi-plus font-adjust"></i></button></div>
  
      <AddCard show={modalShow} onHide={() => setModalShow(false)} collection = {collection} cards = {cards} setCards = {setCards}/>

      <DeleteCard collection = {collection} cards = {cards} index = {index} getCollection = {getCollection} displayNextCard = {displayNextCard} displayPrevCard = {displayPrevCard} changeInequality = {changeInequality} inequality = {inequality} setInequality = {setInequality} prevInequality = {prevInequality} setPrevInequality = {setPrevInequality} prev = {prev} setPrev = {setPrev} next = {next} setNext= {setNext}/>
      <div className = 'card-answer'>{cards[index]?.definition}</div>
      
      <NextCard cards = {cards} setCards = {setCards} index = {index} setIndex = {setIndex} lines = {lines} setLines = {setLines} questions = {questions} setQuestions = {setQuestions} card = {card} setCard = {setCard} displayNextCard = {displayNextCard} displayPrevCard = {displayPrevCard} changeInequality = {changeInequality} inequality = {inequality} setInequality = {setInequality} prevInequality = {prevInequality} setPrevInequality = {setPrevInequality} prev = {prev} setPrev = {setPrev} next = {next} setNext= {setNext}/>      
      
      <EditCard/>
      {/* <CardNumber index = {index} cards = {cards} getCollection = {getCollection}/> */}
      <div className = 'card-number'> {index+1}/{cards.length}</div>

  </div>
  )
}
