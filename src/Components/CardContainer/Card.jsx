import React, { useState } from 'react';

import CardContainer from './CardContainer'
import NextCard from './NextCard';
import AddCard from './AddCard';
import Button from 'react-bootstrap/Button';
import DeleteCard from './DeleteCard';
import EditCard from './EditCard';


export default function Card({collection, cards, index, setIndex, setCards, lines, setLines , questions, setQuestions, modalShow, setModalShow} ) {

  return (
    <div className = 'card'>
      <CardContainer collection = {collection} setCards = {setCards}/>

      <div className = "add-button"  onClick={() => setModalShow(true)}><button className = "btn bg-transparent btn-outline-transparent btn-lg"><i class="bi bi-plus font-adjust"></i></button></div>
  
      <AddCard show={modalShow} onHide={() => setModalShow(false)}/>
      <DeleteCard/>
      <div className = 'card-answer'>{cards[index]?.definition}</div>
      <NextCard cards = {cards} setCards = {setCards} index = {index} setIndex = {setIndex} lines = {lines} setLines = {setLines} questions = {questions} setQuestions = {setQuestions}/>      
      <EditCard/>
      <div className = 'card-number'> {index+1}/{cards.length}</div>


  </div>
  )
}
