import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function AddCard({collection, show, onHide, cards, setCards, getCollection, setNext, setReload, changeInequality}) {


const[word, setWord] = useState('');
const[definition, setDefinition] = useState('');


    async function addNewCard(card){
  
      let res = await axios.post(`http://127.0.0.1:8000/api/collections/${collection.id}/cards/`, card);
        console.log(res); 
        if(res.status === 201){
          getCollection();
          changeInequality();
          // setNext(true);

        }
    }

    function handleSubmit(event){
        event.preventDefault();
       let newCard = {
            word: word,
            definition : definition
        }
        console.log (newCard);
        addNewCard(newCard);
        // setReload(true);

    }

    


  return (
    // <div className = 'add-card'><button className = "add-button btn bg-transparent btn-outline-transparent btn-lg"><i class="bi bi-plus font-adjust"></i></button>
  
    <Modal
    // {...props}
    {...{collection, show, onHide}}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
      <h4>Add a Card</h4>

      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
       
          <form onSubmit ={handleSubmit} className = 'table'>
              {/* <h2>Add New Song</h2> */}
              <label className = 'name'>Front</label>
              <input className ='form-control' type = 'text'  value={word} onChange={(event) => setWord(event.target.value)} required></input>
      
              <label className = 'name'>Back</label>
              <input className ='form-control' type = 'text'  value={definition} onChange={(event) => setDefinition(event.target.value)} required></input>

              <button onClick={onHide}className = 'badge badge-pill btn btn-primary ' type = 'submit'>Submit</button>
          </form>
      </p>
    </Modal.Body>
    <Modal.Footer>
      {/* <Button >Close</Button> */}
    </Modal.Footer>
  </Modal>
// </div>
    )
}
