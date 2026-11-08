 import AuthInputs from './components/AuthInputs.jsx';
 import Header from './components/Header.jsx';

 import { useState } from "react"
 export default function App() {
   return (
     <>
       <Header />
       <main>
         <AuthInputs />
       </main>
     </>
   );
 }

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
