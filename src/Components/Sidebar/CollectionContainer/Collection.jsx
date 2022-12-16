import React, { useState, useEffect } from 'react';


import CollectionContainer from './CollectionContainer'


export default function Collection({setCollection, collection} ) {

  const[cards, setCards] = useState ([]);
  // console.log(`cards: ${cards.setIndex?.word}`)
  const[index, setIndex] = useState([-1]);

  useEffect(() => {
    setIndex(+1);
  }, []);

  return (
        <div className = 'card-collections'><h2>{collection.title}</h2>
        <CollectionContainer collection = {collection} cards = {cards} setCards = {setCards} />
        <div className = 'card-content'>{cards[index]?.word}</div>
    </div>

  )
}
