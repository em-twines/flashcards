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



import React, { useState, useEffect } from "react";
import axios from 'axios';


function App() {

const[card, setCard] = useState([]);
const[collections, setCollections] = useState([]);
const[center, setCenter] = useState(false); 


  async function getAllCollections() {
    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }

  useEffect(() => {
    getAllCollections(true);
  }, []);


  // function setCenterElement(){
  //   if (setCenter(true)){
  //     return <CardViewer/>
  //   }
  //   else{
  //     return <Collection/>
  //   }

  // }


  return (

    <div className = "App">
      {/* <div className = 'container-column'> */}
      <div>
      {/* <div className = 'container-box'> */}
        
        <div className  ='sidebar-container'>
          <Header/>
          <div className ='sidebar-horizontal'>
          <Sidebar collections = {collections} setCollections = {setCollections} center ={center} setCenter = {setCenter}/>
          
      {center ? (
        <CardViewer/>
        ):(
          <Collection/>
        )}
        </div>
      </div>      
    </div>

  </div>
  );
}

export default App;