import React, { useState } from 'react';
import Collection from '../Sidebar/CollectionContainer/Collection';

export default function NextCard({cards, setCards, index, setIndex, noLines, setLines,  collectionComponent, setCollectionComponent }) {

  const[prev, setPrev] = useState([]);
  const[next, setNext] = useState([]);

// let arr = Object.keys(cards);
//       let myCards = arr[0]

    function displayNextCard(){
    debugger ;
    if (cards.length - index > 1){
      setNext(true);
      setLines(false);
      setCards([setIndex(index+1)]);
      console.log(cards[index+1].word);
      debugger; 
    }
    else{
      setNext(false);
    }
  }

  function displayPrevCard(){
    if (cards.length > 0){
      setPrev(true);
      setLines(false);
      setCards([setIndex(index-1)]);
 
    }  
    else{
      setPrev(false);
    }
  }


  return (
    <div className = 'button-box'>

        {prev ? (<button onClick= {() => {displayPrevCard() ; setLines(true)} } className = 'prev-button'><span>Previous</span></button>)
        :(<button className = 'prev-button-transparent'><span>Previous</span></button>)}


        {next ? (<button onClick= {() => {displayNextCard(); setLines(true) }} className = 'next-button'><span>Next</span></button>)
        :(<button className = 'next-button-transparent'><span>Next</span></button>)}

    </div>
  )
}
