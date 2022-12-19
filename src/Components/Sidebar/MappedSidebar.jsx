

import React, { useState , useEffect} from 'react';

export default function MappedSidebar({collections, setCollection, setQuestions, center, setCenter,setIndex, el, active, setActive, className}){

    // useEffect(() => {
    //     setActive(false);
    //   }, [])
    

    // function handleActive(){
    //     setActive(true); 
    // }

  return (
    <div>
        {/* <div className = {className} onClick= {() => {setCollection(collections[el.id-1]) ; handleActive(); setCenter(false); setQuestions(false); setIndex(0)}} ><h4>{el.title}</h4></div> */}
        <div className = {className} onClick= {() => {setCollection(collections[el.id-1]) ; setCenter(false); setQuestions(false); setIndex(0)}} ><h4>{el.title}</h4></div>

        
    </div>

  )
}

