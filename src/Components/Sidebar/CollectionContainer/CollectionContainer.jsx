import React, { useState, useEffect } from 'react';

import CardViewer from '../../CardContainer/CardViewer';
import Collection from '../CollectionContainer/Collection'
import axios from 'axios';

export default function CollectionContainer({collection, cards, setCards}) {

  // const[cards, setCards] = useState ([]);

  async function getCollection(){
    console.log(`title: ${collection.title}`);
    let response = await axios.get(`http://127.0.0.1:8000/api/collections/${collection?.id}/cards/`)
    setCards(response.data);
    console.log(response.data)
}


//send cards in random order

useEffect(() => {
  getCollection();
}, [collection]);

  return (
    <div >
      {/* {cards[index]?.word} */}
    </div>
  )
}
