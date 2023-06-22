import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return (
  <main>
    <section className='container'>
      <h3>0 BIRTHDAYS TODAY</h3>
      <List />
      <button onClick={()=> console.log('you clicked me')}>
        CLEAR ALL
      </button>
    </section>
    </main>
  );
}

export default App;
