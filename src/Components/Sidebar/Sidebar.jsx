

import React, { useEffect, useState } from 'react';


export default function Sidebar({collections, collection, setCollection,  questions, setQuestions, center, setCenter, index, setIndex}) {

  // const[collection, setCollection] = useState(null);



  return (
            
  <div className = 'sidebar'>
    <div><h3 className = 'collection-title'>Collections</h3></div>
    <div>            
    {collections.map((el) => {
      return(

        <div onClick= {() => {setCollection(collections[el.id-1]) ; setCenter(false); setQuestions(false); setIndex(0) }}> 
          <h4 className = 'collection-item'>{el.title}</h4>    
        </div>
        )})}

    </div>
  

    {/* <div className = "collection-item" onClick=  {()=>{setCollection(collections[1]) ; center ? setCenter(false) : setCenter(true) ; setLines(true)}}><h4 >CSS</h4></div> 
    <div className = "collection-item" onClick= {()=>{setCollection(collections[2]) ; center ? setCenter(false) : setCenter(true) ; setLines(true)}}><h4 >PANDAS</h4></div>  */}
  </div>
        
  )
}
