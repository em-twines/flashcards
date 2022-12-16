
import CollectionContainer from '../../Components/Sidebar/CollectionContainer/CollectionContainer';
import Collection from '../../Components/Sidebar/CollectionContainer/Collection';
import CardViewer from '../CardContainer/CardViewer';

import React, { useEffect, useState } from 'react';


export default function Sidebar({collections, setCenter, collection, setCollection }) {

  // const[collection, setCollection] = useState(null);




  return (
            
          <div className = 'sidebar'>
            <div><h3 className = 'collection-title'>Collections</h3></div>
            <div className = "collection-item" onClick= {()=>{setCollection(collections[0]) ; setCenter(false)}}><h4 >Flutter</h4></div>
            <div className = "collection-item" onClick=  {()=>{setCollection(collections[1]) ; setCenter(false)}}><h4 >CSS</h4></div>
            <div className = "collection-item" onClick= {()=>{setCollection(collections[2]) ; setCenter(false)}}><h4 >PANDAS</h4></div> 
          </div>
        
  )
}
