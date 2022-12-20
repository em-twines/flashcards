import React, { useState , useEffect} from 'react';
import Collection from './CollectionContainer/Collection';

export default function MappedSidebar({collection, collections, setCollection, setQuestions, setCenter,setIndex, el, className, getCollection}){

    // useEffect(() => {
    //     setActive(false);
    //   }, [])
    

    // function handleActive(){
    //     setActive(true); 
    // }

  return (
    <div>
        {/* <div className = {className} onClick= {() => {setCollection(collections[el.id-1]) ; handleActive(); setCenter(false); setQuestions(false); setIndex(0)}} ><h4>{el.title}</h4></div> */}
        <div className = {className} onClick= {() => {setCollection(collections[el.id-1]); getCollection(); console.log(collection); setCenter(false); setQuestions(false); setIndex(0)}} ><h4>{el.title}</h4></div>

        
    </div>

  )
}