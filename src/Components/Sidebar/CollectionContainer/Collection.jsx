import React from 'react';
import AddCard from '../../CardContainer/AddCard';
import CollectionContainer from './CollectionContainer'
import Flip from './Flip';

import Button from 'react-bootstrap/Button';
import DeleteCard from '../../CardContainer/DeleteCard';
import EditCard from '../../CardContainer/EditCard';


export default function Collection({setCollection, collection, index, setIndex, cards, setCards, questions, setQuestions, modalShow, setModalShow, card, setCard, getCollection, displayPrevCard, displayNextCard, changeInequality, inequality, setInequality, prevInequality, setPrevInequality, prev, setPrev, next, setNext}) {



  return (
        <div className = 'card-collections'><h2>{collection?.title}</h2>
        
        <CollectionContainer collection = {collection} cards = {cards} setCards = {setCards} getCollection = {getCollection} />
        
        <div  className = "add-button" onClick={() => setModalShow(true)}> <button className = "add-button btn bg-transparent btn-outline-transparent btn-lg"><i class="bi bi-plus font-adjust"></i></button></div>
        
        <AddCard show={modalShow} onHide={() => setModalShow(false)} collection = {collection} cards = {cards} setCards = {setCards}/>
        
        <DeleteCard collection = {collection} cards = {cards} index = {index} displayNextCard = {displayNextCard} displayPrevCard = {displayPrevCard} changeInequality = {changeInequality} inequality = {inequality} setInequality = {setInequality} prevInequality = {prevInequality} setPrevInequality = {setPrevInequality} prev = {prev} setPrev = {setPrev} next = {next} setNext= {setNext}/>
        <div className = 'card-content'>{cards[index]?.word}</div>
        
        <Flip  questions = {questions} setQuestions = {setQuestions} displayNextCard = {displayNextCard} displayPrevCard = {displayPrevCard} changeInequality = {changeInequality} inequality = {inequality} setInequality = {setInequality} prevInequality = {prevInequality} setPrevInequality = {setPrevInequality} prev = {prev} setPrev = {setPrev} next = {next} setNext= {setNext}/>
        
        <div className = 'card-number'> {index+1}/{cards.length}</div>
        
        <EditCard/>

    </div>

  )
}
