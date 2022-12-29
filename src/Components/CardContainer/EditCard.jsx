import React, { useState , useEffect} from 'react';

// import { Card } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function EditCard({value, setValue, collection, card, setCard, collections, definition, setDefinition, word, cards, setWord, show, onHide, index}) {




  async function edit(card){  
    let response = await axios.put(`http://127.0.0.1:8000/api/collections/${collections[index].id}/cards/${cards[index].id}/`, card);
    
    console.log('Returned data:', response);
    setCard(response.data);
  }


  function handleSubmit(event){
    event.preventDefault();    
    let editedCard = {
      word: word,
      definition: definition
    }
    edit(editedCard);
    setValue();
    }


  return (

      <Modal
      {...{show, onHide, word, definition}}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
      <h4>Edit this Card</h4>

      </Modal.Title>
      </Modal.Header>
      <Modal.Body>
    
        <form onSubmit ={handleSubmit} className = 'table'>

            <label className = 'name'>Front</label>
            <input className ='form-control' type = 'text' placeholder={`${cards[index]?.word}`} value={word} onChange={(event) => setWord(event.target.value)} required></input>
    
            <label className = 'name'>Back</label>
            <input className ='form-control' type = 'text'  placeholder={`${cards[index]?.definition}`} value={definition} onChange={(event) => setDefinition(event.target.value)} required></input> 
            <button onClick={() => {onHide()}} className = 'badge badge-pill btn btn-primary ' type = 'submit'>Submit</button>
        </form>
      </Modal.Body>
      </Modal>
    )
  
}






