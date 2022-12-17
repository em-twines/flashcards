import React, { useState , useEffect} from 'react';
import Collection from '../Sidebar/CollectionContainer/Collection';

export default function NextCard({cards, setCards, index, setIndex, questions, setQuestions}) {

  const[prev, setPrev] = useState(false);
  const[next, setNext] = useState(true);
  const[card, setCard] = useState([cards]);

  const [inequality, setInequality] = useState(false);
  
  function changeInequality(){
    if (cards.length-index > 1){
          setInequality(true)
      }
  }
  
  useEffect(() => {
    changeInequality();
  }, [inequality])
  
  
    // useEffect(() => {
    //   setCard(cards[index])
    // }, [card])
    

    function displayNextCard(){
    // if (cards.length - index > 1){
      setNext(true);
      setQuestions(false);
      changeInequality();
      let myWord  = setCard(cards[index+1])
      console.log(index + 1)
      let myIndex = setIndex(index + 1);
      console.log(myIndex);
      return card.word
      // debugger;
      // console.log(`next card: ${cards[(index+1)].word}`);
      
      // return setCard(cards[index+1]).word
      // return cards[index+1].word;      

    
    // else{
    //   setNext(false);
    // }
  }

  function displayPrevCard(){
    if (cards.length > 0){
      setPrev(true);
      setCards([setIndex(index-1)]);
      setQuestions(false);
      return cards[index-1].word
    }  
    else{
      setPrev(false);
    }
  }


  return (
    <div className = 'button-box'>

        {prev ? (<button onClick= {() => { displayPrevCard() }} className = 'prev-button'><span>Previous</span></button>)
        :(<button className = 'prev-button-transparent'><span>Previous</span></button>)}

        {/* {next ? (<button onClick= {() => { displayNextCard() }} className = 'next-button'><span>Next</span></button>)
        :(<button className = 'next-button-transparent'><span>Next</span></button>)} */}


      {next ? ( 
        inequality ? (
        <button onClick={() => { displayNextCard()}} className = 'next-button'><span>Next</span></button>
        ):(
        <button onClick={() => {setCard(cards[index]) ; setNext(false)}} className = 'next-button'><span>Next</span></button>)
      ):(
      <button className = 'next-button-transparent'><span>Next</span></button>)}
      
    </div>
  )
}
