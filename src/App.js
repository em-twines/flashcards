import './App.css';
import AddCard from './Components/CardContainer/AddCard';
import Card from'./Components/CardContainer/Card.jsx';
import CardContainer from './Components/CardContainer/CardContainer.jsx';
import CardViewer from './Components/CardContainer/CardViewer';
import DeleteCard from './Components/CardContainer/DeleteCard';
import EditCard from './Components/CardContainer/EditCard';
import NextCard from './Components/CardContainer/NextCard';
import Collection from './Components/Sidebar/CollectionContainer/Collection.jsx';
import CollectionsContainer from './Components/Sidebar/CollectionContainer/CollectionContainer.jsx';
import Header from './Components/Header/Header.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';

import "bootstrap/dist/css/bootstrap.css";



import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';


function App() {

const[cards, setCards] = useState ([]);
const[card, setCard] = useState([cards]);
const[collections, setCollections] = useState([]);
const[center, setCenter] = useState(true); 
// const centerRef = useRef(center);
const[collection, setCollection] = useState(null);
const[noLines, setLines] = useState(true);
const[index, setIndex] = useState(0);

const[cardContent, setCardContent] = useState([]);
const[questions, setQuestions] = useState(null);
const[selected, setSelected] = useState(false);
const[otherSelected, setOtherSelected] = useState(false);
const [modalShow, setModalShow] = useState(false);


// const[prev, setPrev] = useState(false);
// const[next, setNext] = useState(true);
// const [inequality, setInequality] = useState(false);
// const [prevInequality, setPrevInequality] = useState(false);



// function changeInequality(){
//   if (cards.length-index > 1){
//         setInequality(true);
//     }
//   else{
//     setInequality(false);
//     setNext(false);
//     }
//   if (index > 0){
//     setPrev(true);
//     setPrevInequality(true);
//     console.log(index);
//   }
//   else
//   {
//     setPrevInequality(false);
//   }
// }

async function getAllCollections() {
    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }

  

  useEffect(() => {
    getAllCollections(true);
  }, []);



  async function getCollection(){
    console.log(`title: ${collection.title}`);
    let response = await axios.get(`http://127.0.0.1:8000/api/collections/${collection?.id}/cards/`)
    setCards(response.data);
    console.log(response.data)
}


// function displayNextCard(){
//   setNext(true);
//   setQuestions(false);
//   changeInequality();
//   setCard(cards[index + 1])
//   setIndex(index + 1);
//   return cards[index + 1].word;
 
// }
// function displayPrevCard(){
//     setPrev(true);
//     setQuestions(false);
//     changeInequality(); 
//     setIndex(index);
//     setCard(cards[index]);
//     return cards[index].word;
// }


  return (

    <div className = "App">
      
        <div className  ='sidebar-container'>
          <Header/>
          <div className ='sidebar-horizontal'>
          <Sidebar collections = {collections} setCollections = {setCollections} collection = {collection} setCollection = {setCollection}  center = {center} setCenter = {setCenter} questions = {questions} setQuestions = {setQuestions} index = {index} setIndex = {setIndex} selected = {selected} setSelected = {setSelected}  otherSelected = {otherSelected} setOtherSelected = {setOtherSelected} />
          
          {center ? (
            <CardViewer/>
            ):(
            
           !questions ? (
          <Collection collection = {collection} index = {index} setIndex = {setIndex} cards = {cards} setCards = {setCards} cardContent = {cardContent} questions = {questions} setQuestions = {setQuestions}  modalShow = {modalShow} setModalShow = {setModalShow} card = {card} setCard = {setCard} getCollection = {getCollection}  />
          ):(
          <Card collection = {collection} index = {index} setIndex = {setIndex} cards = {cards} setCards = {setCards} questions = {questions} setQuestions = {setQuestions} modalShow = {modalShow} setModalShow = {setModalShow} card = {card} setCard = {setCard} getCollection = {getCollection}  />))}



          {/* {noLines ? (
            (center ? (
            <CardViewer/>
            ):(
              <Collection collection = {collection} index = {index} setIndex = {setIndex} noLines = {noLines} setLines = {setLines} cards = {cards} setCards = {setCards} cardContent = {cardContent}/>
            ))
          ):(
            <Card collection = {collection} index = {index} setIndex = {setIndex} cards = {cards} setCards = {setCards} noLines = {noLines} setLines = {setLines} collectionComponent = {collectionComponent}setCollectionComponent = {setCollectionComponent}/>
          )} */}
        </div>
      </div>      
    </div>


  );
}

export default App;