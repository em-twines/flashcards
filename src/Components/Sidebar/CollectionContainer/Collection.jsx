import React from 'react';
import AddCard from '../../CardContainer/AddCard';
import CollectionContainer from './CollectionContainer'
import Flip from './Flip';

import Button from 'react-bootstrap/Button';
import DeleteCard from '../../CardContainer/DeleteCard';
import EditCard from '../../CardContainer/EditCard';


export default function Collection({setCollection, collection, noLines, setLines, index, setIndex, cards, setCards, questions, setQuestions, modalShow, setModalShow}) {

  // const[cards, setCards] = useState ([]);
  // console.log(`cards: ${cards.setIndex?.word}`)

  // useEffect(() => {
  //   setIndex(0);
  // }, []);

  return (
        <div className = 'card-collections'><h2>{collection?.title}</h2>
        <CollectionContainer collection = {collection} cards = {cards} setCards = {setCards} />
        <div  className = "add-button" onClick={() => setModalShow(true)}> <button className = "add-button btn bg-transparent btn-outline-transparent btn-lg"><i class="bi bi-plus font-adjust"></i></button></div>
        <AddCard show={modalShow} onHide={() => setModalShow(false)}/>
        <DeleteCard/>
        <div className = 'card-content'>{cards[index]?.word}</div>
        <Flip  questions = {questions} setQuestions = {setQuestions}/>
        <div className = 'card-number'> {index+1}/{cards.length}</div>
        <EditCard/>

    </div>

  )
}
// {cardContent? (<div className='card-content'> {cards[index]?.word} 
// <Flip noLines = {noLines} setLines = {setLines}/></div>) : (<div ></div>)}