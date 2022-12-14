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
import React, { useState, useEffect } from "react";








function App() {
  return (
    <div className="App">
        <Header/>
        <Sidebar/>

    </div>
  );
}

export default App;
