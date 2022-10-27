import React, { useState } from "react";
import "./Modal.css";

export default function Modaltest123() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };


  if(modal){
    document.body.classList.add('active model')
  }
  else{
    document.body.classList.add('active-model');
  }
 
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
          
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <p> </p>
    </>
  );
}