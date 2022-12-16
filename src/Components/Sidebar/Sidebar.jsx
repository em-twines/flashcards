
import CollectionContainer from '../../Components/Sidebar/CollectionContainer/CollectionContainer';
import Collection from '../../Components/Sidebar/CollectionContainer/Collection';
import CardViewer from '../CardContainer/CardViewer';

import React, { useEffect, useState } from 'react';


export default function Sidebar({collections, setCenter, collection, setCollection, center, setLines, setCardContent}) {

  // const[collection, setCollection] = useState(null);




  return (
            
  <div className = 'sidebar'>
    <div><h3 className = 'collection-title'>Collections</h3></div>
    <div>            
    {collections.map((el) => {
      return(
        <div onClick= {() => {setCollection(collections[el.id-1]) ; setCenter(false) ; setCardContent(false) ; setLines(true)}}>
          <h4 className = 'collection-item'>{el.title}</h4>    
        </div>
        )})}

    </div>
  

    {/* <div className = "collection-item" onClick=  {()=>{setCollection(collections[1]) ; center ? setCenter(false) : setCenter(true) ; setLines(true)}}><h4 >CSS</h4></div> 
    <div className = "collection-item" onClick= {()=>{setCollection(collections[2]) ; center ? setCenter(false) : setCenter(true) ; setLines(true)}}><h4 >PANDAS</h4></div>  */}
  </div>
        
  )
}
