import React, { useState , useEffect} from 'react';

export default function NextCard({cards, setCards, card, setCard, index, setIndex, questions, setQuestions, displayPrevCard, displayNextCard, changeInequality, inequality, setInequality, prevInequality, setPrevInequality, prev, setPrev, next, setNext}) {

  // const[prev, setPrev] = useState(false);
  // const[next, setNext] = useState(true);
  // const[card, setCard] = useState([cards]);

  // const [inequality, setInequality] = useState(false);
  // const [prevInequality, setPrevInequality] = useState(false);
  
  // let myIndex ;

  // function changeInequality(){
  //   if (cards.length-index > 1){
  //         setInequality(true);
  //     }
  //   else{
  //     setInequality(false);
  //     setNext(false);
  //     }
  //   if (index > 0){
  //     setPrev(true);
  //     setPrevInequality(true);
  //     console.log(index);
  //   }
  //   else
  //   {
  //     setPrevInequality(false);
  //   }
  // }



  useEffect(() => {
    changeInequality();
  }, [])
  

  //   function displayNextCard(){
  //     setNext(true);
  //     setQuestions(false);
  //     changeInequality();
  //     myIndex = setIndex(index + 1);
  //     let myWord  = setCard(cards[myIndex])
  //     return card.word
     
  // }

//   function displayNextCard(){
//     setNext(true);
//     setQuestions(false);
//     changeInequality();
//     setCard(cards[index + 1])
//     setIndex(index + 1);
//     return cards[index + 1].word;
   
// }
//   function displayPrevCard(){
//       setPrev(true);
//       setQuestions(false);
//       changeInequality(); 
//       setIndex(index);
//       setCard(cards[index]);
//       return cards[index].word;
//   }

console.log(prev, next)
  return (
    <div className = 'button-box'>

        {prev ? ( 
          prevInequality ? (
          <button onClick={() => { displayPrevCard()}} className = 'prev-button'><span>Previous</span></button>
          ):(
          <button onClick={() => {setCard(cards[index]) ; setPrev(false)}} className = 'prev-button'><span>Previous</span></button>)
        ):(
        <button className = 'prev-button-transparent'><span>Previous</span></button>)}  


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
