import React, { useState, useEffect } from 'react';


import CollectionContainer from './CollectionContainer'
import Flip from './Flip';

export default function Collection({setCollection, collection, noLines, setLines, index, setIndex} ) {

  const[cards, setCards] = useState ([]);
  // console.log(`cards: ${cards.setIndex?.word}`)

  useEffect(() => {
    setIndex(+1);
  }, []);

  return (
        <div className = 'card-collections'><h2>{collection.title}</h2>
        <CollectionContainer collection = {collection} cards = {cards} setCards = {setCards} />
        <div className = 'card-content'>{cards[index]?.word}</div>
        <Flip noLines = {noLines} setLines = {setLines}/>
    </div>

  )
}
