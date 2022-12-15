
import CollectionContainer from '../../Components/Sidebar/CollectionContainer/CollectionContainer';
import Collection from '../../Components/Sidebar/CollectionContainer/Collection'
import CardViewer from '../CardContainer/CardViewer';

import React, { useState } from 'react';


export default function Sidebar({collections}, {setCollections}) {
  
  debugger; 

  const[collection, setCollection] = useState(null);



  // onClick= {()=>{setCollection(collections[0])}}



  return (
      <div>
         

         
          <div className = 'sidebar'>
            <div><h3 className = 'collection-title'>Collections</h3></div>
            <div className = "collection-item" onClick= {()=>{setCollection(collections[0])}}><h4 >Flutter</h4></div>
            <div className = "collection-item" onClick= {()=>{setCollection(collections[1])}}><h4 >CSS</h4></div>
            <div className = "collection-item" onClick= {()=>{setCollection(collections[2])}}><h4 >PANDAS</h4></div> 
          </div>
          
          <div>
          {collection === null ? 
          (<div className = 'grid-collection'><Collection className = 'collection'/></div> 

          ):( <div className = 'grid-cardviewer'><CardViewer className = 'cardviewer'/></div>)
          }
          </div>
          <CollectionContainer setCollection = {setCollection} collection = {collection}/>

        
          

    </div>
  )
}
