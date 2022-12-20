import React from 'react'
import axios from 'axios';

export default function DeleteCard({collection, cards, index, setIndex, getCollection, displayPrevCard, displayNextCard, changeInequality, inequality, setInequality, prevInequality, setPrevInequality, prev, setPrev, next,  setNext, questions, setQuestions, setCard}) {


 function setDefaultCard(){
    if (index===0){
      setNext(true);
      setQuestions(false);
      changeInequality();
      setCard(cards[index + 1]);
      setIndex(index + 1);
      return cards[index + 1].word;
    }
    else if(index===1){
      setPrev(false);
      setQuestions(false);
      changeInequality(); 
      setCard(cards[index-1]);
      setIndex(index-1);
      return cards[index-1].word;
    }
    else {
      setPrev(true);
      setQuestions(false);
      changeInequality(); 
      setIndex(index-1);
      console.log(cards[index-1].word)
      return cards[index-1].word;
    }
  }

  async function deleteCard(){
    console.log(index);

    
    let response = await axios.delete(`http://127.0.0.1:8000/api/collections/${collection.id}/cards/${cards[index].id}/`);
    
    getCollection();
    
    setDefaultCard();
    

 
}



  return (
   <div onClick ={() => deleteCard()} className = 'delete-card'><button className = " btn bg-transparent btn-outline-transparent btn-lg"><i class="bi bi-trash trash-size"></i></button></div>
  )
}


