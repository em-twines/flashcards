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
import './index.css';



import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';


function App() {

// const[card, setCard] = useState([]);
const[collections, setCollections] = useState([]);
const[center, setCenter] = useState(true); 
// const centerRef = useRef(center);
const[collection, setCollection] = useState(null);
const[noLines, setLines] = (useState(true))
const[index, setIndex] = useState(0);
const[cards, setCards] = useState ([]);
const[cardContent, setCardContent] = useState([]);
const[collectionComponent, setCollectionComponent] = useState();
const[questions, setQuestions] = useState(null);


async function getAllCollections() {
    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }

  

  useEffect(() => {
    getAllCollections(true);
  }, []);



  return (

    <div className = "App">
      
        <div className  ='sidebar-container'>
          <Header/>
          <div className ='sidebar-horizontal'>
          <Sidebar collections = {collections} setCollections = {setCollections} collection = {collection} setCollection = {setCollection} setLines = {setLines} setCardContent = {setCardContent} center = {center} setCenter = {setCenter} questions = {questions} setQuestions = {setQuestions}/>
          
          {center ? (
            <CardViewer/>
            ):(
            
           !questions ? (
          <Collection collection = {collection} index = {index} setIndex = {setIndex} noLines = {noLines} setLines = {setLines} cards = {cards} setCards = {setCards} cardContent = {cardContent} questions = {questions} setQuestions = {setQuestions} debugger/>
          ):(
          <Card collection = {collection} index = {index} setIndex = {setIndex} cards = {cards} setCards = {setCards} noLines = {noLines} setLines = {setLines} questions  ={questions} setQuestions = {setQuestions} />))}



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