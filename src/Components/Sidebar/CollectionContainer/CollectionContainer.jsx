import React, { useState, useEffect } from 'react';

import CardViewer from '../../CardContainer/CardViewer';
import Collection from '../CollectionContainer/Collection'
import axios from 'axios';

export default function CollectionContainer({collection, setCards, getCollection}) {

  // const[cards, setCards] = useState ([]);




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
