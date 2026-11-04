import Header from './components/Header/Header';
import { useState } from 'react';
import CoreConcepts from './components/core/CoreConcepts';
import MenuData from './components/menu-data/MenuData';


function App() {
  const [content, setContent] = useState('');
  function handleClick(selectedBtn) {
    setContent(selectedBtn);
  }
  return (

    <>
      {/* or <></> */}
        <Header />
      <main>
        <CoreConcepts />
       <MenuData />
      </main>
    </>
  );
}

export default App