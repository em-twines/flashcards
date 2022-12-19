

import React, { useEffect, useState } from 'react';
import MappedSidebar from './MappedSidebar/MappedSidebar';


export default function Sidebar({collections, setCollection,  questions, setQuestions, center, setCenter, index, setIndex}) {

  const[active, setActive] = useState(false);



  return (
            
                  
    <div className = 'sidebar'>
    <div><h3 className = 'collection-title'>Collections</h3></div>

      {collections.map((el) => {
        return(
          active ? (<MappedSidebar collections = {collections} setCollection = {setCollection} center = {center} setCenter = {setCenter} quesgtions = {questions} setQuestions = { setQuestions } active = {active} setActive = {setActive} index = {index} setIndex = {setIndex} el = {el} className = 'collection-item-active'/> 
          ):(
            <MappedSidebar collections = {collections} setCollection = {setCollection} center = {center} setCenter = {setCenter} quesgtions = {questions} setQuestions = { setQuestions } active = {active} setActive = {setActive} index = {index} setIndex = {setIndex} el = {el} className = 'collection-item'/>
          )
          )
      })}

     
          
      
     
  </div>
        
  )
}

//make new component. put handler in component that changes classname of that element 

