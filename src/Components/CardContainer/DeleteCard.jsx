import React from 'react'
import axios from 'axios';

export default function DeleteCard({collection, cards, index, getCollection, displayPrevCard, displayNextCard, changeInequality, inequality, setInequality, prevInequality, setPrevInequality, prev, setPrev, next, setNext}) {

    

  async function deleteCard(){
    console.log(index);

    debugger
    let response = await axios.delete(`http://127.0.0.1:8000/api/collections/${collection.id}/cards/${cards[index].id}/`);
    debugger
    console.log('Returned data:', response);
    getCollection();

}


  return (
   <div onClick ={() => deleteCard()} className = 'delete-card'><button className = " btn bg-transparent btn-outline-transparent btn-lg"><i class="bi bi-trash trash-size"></i></button></div>
  )
}


