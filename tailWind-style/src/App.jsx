import { useState } from 'react';

//  export default function App() {
//    return (
//      <>
//        <Header />
//        <main>
//          <AuthInputs />
//        </main>
//      </>
//    );
//  }

// function App() {
//     const [buttonPressed, setButtonPressed] = useState(false);
//     return (
//     <div id="app">
//       <h1
//       className={`h1 ${buttonPressed ? 'highlight-green' : 'highlight-red'}`}
//       >CSS is great!</h1>
//       <menu>
//         <li>
//           <button onClick={() => setButtonPressed(true)}>Yes</button>
//         </li>
//         <li>
//           <button onClick={() => setButtonPressed(false)}>No</button>
//         </li>
//       </menu>
//     </div>
//   );
// }

// export default App;

export default function App() {
  const [click, setClick] = useState(false);

  return (
    <div>
      {/* <p className={click ? 'text-red-500' : 'text-black'}>Style me!</p>
      <button onClick={() => setClick((previousClick) => !previousClick)}>
        Toggle style
      </button> */}
      <p className={click ? 'text-red-500' : 'text-black'}>Style me</p>
      <button onClick={() => setClick((prevClick) => !prevClick)}>click me</button>
    </div>
  );
}
