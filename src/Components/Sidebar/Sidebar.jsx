
import CollectionContainer from '../../Components/Sidebar/CollectionContainer/CollectionContainer';
import Collection from '../../Components/Sidebar/CollectionContainer/Collection'
import CardViewer from '../CardContainer/CardViewer';

import React, { useState } from 'react';


export default function Sidebar({collections}, {setCollections}) {
  
  
  const[collection, setCollection] = useState([]);
  debugger; 

  return (
      <div>
        <CollectionContainer setCollection = {setCollection} collection = {collection}/>
        <div className = 'main-grid'>
          <div className = 'sidebar'>
            <div><h3  className = 'collection-title'>Collections</h3></div>
            <div className = "collection-item" onClick= {()=>{setCollection(collections[0])}}> <h4 >Flutter</h4></div>
            <div className = "collection-item" onClick= {()=>{setCollection(collections[1])}}><h4 >CSS</h4></div>
            <div className = "collection-item" onClick= {()=>{setCollection(collections[2])}}><h4 >PANDAS</h4></div> 
          </div>
          
        
          
        <div>
          {collection==0 
          ? <Collection className = 'center'/> 
          : <CardViewer className = 'center'/>} 
         
        </div>
      </div>
    </div>
  )
}
