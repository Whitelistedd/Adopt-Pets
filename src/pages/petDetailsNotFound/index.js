import React from 'react';

import { useHistory } from 'react-router-dom';


const PetDetailsNotFound = () => {


  const history = useHistory();

  const goBack = () => {
    history.goBack()
  }
  
  return (
    <main className="page errorPage">
      <h3>404: Who let the dogs out?</h3>
      <p>Sorry, but the details for this pet have not been uploaded by the shelter yet. Check back later!</p>
      <img
        src="https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2018/05/large-group-of-dogs-running-in-a-field.jpg"
        alt=""
      />
      <div className="actions-container">
        <button className="button" onClick={goBack}>
          Go Back
        </button>
      </div>
    </main>
  );
};

export default PetDetailsNotFound;
