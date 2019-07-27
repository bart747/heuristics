import React, { useState } from 'react';
import './App.css';
import FetchAndShow from './FetchAndShow';
import ShowSelectedOption from './ShowSelectedOption';


function App() {

  const [isCodeFirst, setIsCodeFirst] = useState<boolean>(true);

  function handleClick() {
    setIsCodeFirst(!isCodeFirst);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> 
        <section className={'selector'}>
          <ShowSelectedOption isCodeFirst={isCodeFirst}/>

          <button className={'btn-round'} onClick={handleClick}>
            <svg className={'btn-icon'} xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24">
              <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/>
              <path d="M0 0h24v24H0z"
              fill="none"/>
            </svg>
          </button>    

        </section>
      </header>
      <main>
        <FetchAndShow isCodeFirst={isCodeFirst}/>
      </main>
    </div>
    )
}

export default App;
