import React, { useState, useEffect} from 'react';

import axios from 'axios';


export default function CardContainer({collection, cards, setCards}) {


  // const[cards, setCards] = useState ([]);

  async function getAnswers(){
    console.log(`title: ${collection.title}`);
    let response = await axios.get(`http://127.0.0.1:8000/api/collections/${collection?.id}/cards/`)
    setCards(response.data);
    console.log(response.data)
}


//send cards in random order

useEffect(() => {
  getAnswers();
}, []);



  return (
    <div></div>
  )
}
