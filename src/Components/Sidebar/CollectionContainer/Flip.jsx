import React from 'react';



export default function Flip({questions, setQuestions}) {


  function changeQuestions(){
    setQuestions(true)
    

}

  return (
    // <button type = 'button' className = 'button button-bottom-right' onClick= {()=>{setLines(false)}}><span>Flip</span></button>
    <div onClick= {()=>{(changeQuestions()) ; console.log(questions) }} >
      <button type = 'button' className = 'button button-bottom-right' ><span>Flip</span></button>
   </div>
  )
}
