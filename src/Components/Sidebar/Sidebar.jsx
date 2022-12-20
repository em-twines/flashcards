
import React, { useEffect, useState } from 'react';
import MappedSidebar from './MappedSidebar.jsx'

export default function Sidebar({collections, setCollection,  questions, setQuestions, center, setCenter, index, setIndex, collection, getCollection}) {

  const[active, setActive] = useState(false);


  return (
            
                  
    <div className = 'sidebar'>
    <div><h3 className = 'collection-title'>Collections</h3></div>

      {collections.map((el) => {
        return(
          <MappedSidebar collection = {collection} getCollection = {getCollection} collections = {collections} setCollection = {setCollection} center = {center} setCenter = {setCenter} questoins = {questions} setQuestions = { setQuestions } index = {index} setIndex = {setIndex} el = {el} className = 'collection-item'/> 
          
          )
      })}

     
          
      
     
  </div>
        
  )
}

//make new component. put handler in component that changes classname of that element 