import './App.css';
import Card from'./Components/CardContainer/Card.jsx';

import CardViewer from './Components/CardContainer/CardViewer';

import Collection from './Components/Sidebar/CollectionContainer/Collection.jsx';
import Header from './Components/Header/Header.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';

import "bootstrap/dist/css/bootstrap.css";



import React, { useState, useEffect } from "react";
import axios from 'axios';


function App() {

// Card refers to back and Collection to front, while collections refers to the different decks in the sidebar. 

const[cards, setCards] = useState ([]);
const[card, setCard] = useState([cards]);
const[collections, setCollections] = useState([]);
const[center, setCenter] = useState(true); //center refers to what is in the center of the page, ie it controls whether or not there is content on the card. It toggles to on when the sidebar buttons (the collections) are clicked.
const[collection, setCollection] = useState(null);
const[cardContent, setCardContent] = useState([]);
const[questions, setQuestions] = useState(null);
const[index, setIndex] = useState(0);
//sets front (word) and back(definition) 
const[word, setWord] = useState('');
const[definition, setDefinition] = useState('');

const[selected, setSelected] = useState(false);
const[otherSelected, setOtherSelected] = useState(false);
const [modalShow, setModalShow] = useState(false);
const[reload, setReload] = useState(false);

const[prev, setPrev] = useState(false);
const[next, setNext] = useState(true);
const [inequality, setInequality] = useState(false);
const [prevInequality, setPrevInequality] = useState(false);



function changeInequality(){
  if (cards.length-index > 1){
        setInequality(true);
    }
  else{
    setInequality(false);
    setNext(false);
    }
  if (index > 0){
    setPrev(true);
    setPrevInequality(true);
  }
  else
  {
    setPrevInequality(false);
  }
}

async function getAllCollections() {
    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }

  

  useEffect(() => {
    getAllCollections(true);
  }, []);



  async function getCollection(){
    let response = await axios.get(`http://127.0.0.1:8000/api/collections/${collection?.id}/cards/`)
    setCards(response.data);
}


function displayNextCard(){
  setNext(true);
  setQuestions(false);
  changeInequality();
  setCard(cards[index + 1])
  setIndex(index + 1);
  return cards[index + 1].word;
 
}
function displayPrevCard(){
    setPrev(true);
    setQuestions(false);
    changeInequality(); 
    setIndex(index);
    setCard(cards[index]);
    return cards[index].word;
}

function setDefaultCard(){
  if (index===0){
    setNext(true);
    setQuestions(false);
    changeInequality();
    setCard(cards[index + 1]);
    setIndex(index + 1);
    return cards[index + 1].word;
  }
  else if(index===1){
    setPrev(false);
    setQuestions(false);
    changeInequality(); 
    setCard(cards[index-1]);
    setIndex(index-1);
    return cards[index-1].word;
  }
  else {
    setPrev(true);
    setQuestions(false);
    changeInequality(); 
    setIndex(index-1);
    console.log(cards[index-1].word)
    return cards[index-1].word;
  }
}

  return (

    <div className = "App">
      
        <div className  ='sidebar-container'>
          <Header/>
          <div className ='sidebar-horizontal'>
          <Sidebar collections = {collections} setCollections = {setCollections} getCollection = {getCollection} collection = {collection} setCollection = {setCollection}  center = {center} setCenter = {setCenter} questions = {questions} setQuestions = {setQuestions} index = {index} setIndex = {setIndex} selected = {selected} setSelected = {setSelected}  otherSelected = {otherSelected} setOtherSelected = {setOtherSelected} displayNextCard = {displayNextCard} displayPrevCard = {displayPrevCard} changeInequality = {changeInequality} inequality = {inequality} setInequality = {setInequality} prevInequality = {prevInequality} setPrevInequality = {setPrevInequality} prev = {prev} setPrev = {setPrev} next = {next} setNext= {setNext} />
          
          {center ? (
            <CardViewer/>
            ):(
            
           !questions ? (
          <Collection collection = {collection} collections = {collections} word = {word} setWord = {setWord} definition = {definition} setDefinition = {setDefinition} index = {index} setIndex = {setIndex} cards = {cards} setCards = {setCards} cardContent = {cardContent} questions = {questions} setQuestions = {setQuestions}  modalShow = {modalShow} setModalShow = {setModalShow} card = {card} setCard = {setCard} getCollection = {getCollection} displayNextCard = {displayNextCard} displayPrevCard = {displayPrevCard} changeInequality = {changeInequality} inequality = {inequality} setInequality = {setInequality} prevInequality = {prevInequality} setPrevInequality = {setPrevInequality} prev = {prev} setPrev = {setPrev} next = {next} setNext= {setNext} setDefaultCard = {setDefaultCard} reload = {reload} setReload = {setReload}/>
          ):(
          <Card collection = {collection} collections = {collections} word = {word} setWord = {setWord} definition = {definition} setDefinition = {setDefinition} index = {index} setIndex = {setIndex} cards = {cards} setCards = {setCards} questions = {questions} setQuestions = {setQuestions} modalShow = {modalShow} setModalShow = {setModalShow} card = {card} setCard = {setCard} getCollection = {getCollection} displayNextCard = {displayNextCard} displayPrevCard = {displayPrevCard} changeInequality = {changeInequality} inequality = {inequality} setInequality = {setInequality} prevInequality = {prevInequality} setPrevInequality = {setPrevInequality} prev = {prev} setPrev = {setPrev} next = {next} setNext= {setNext} setDefaultCard = {setDefaultCard} reload = {reload} setReload = {setReload}/>))}
 


        </div>
      </div>      
    </div>


  );
}

export default App;