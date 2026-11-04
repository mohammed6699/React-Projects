// export default App;
// import React from 'react'
//  export const userData = {
//    firstName: 'Maximilian', // feel free to replace the name value
//    lastName: 'Schwarzmüller', // feel free to replace the name value
//    title: 'Instructor', // feel free to replace the title value
//  }
// //  Edit the User component code to output the userData dat
//  export function User(){
//    return (
//      <div id='user-data' >
//        <h2>{userData.firstName} {userData.lastName}</h2>
//        <p>{userData.title}</p>
//      </div>
//    )
//    }
 
//  // DON'T edit the App component code
//  function App() {
//    return (
//      <div id="app">
//        <h1>Time to Practice</h1>
//        <p>Welcome on board of this course! You got this 💪</p>
//        <User />
//      </div>
//    );
//   }
//  export default App;
// export function CourseGoal({title, description}) {
//   return (
//     <li>
//       <h2>{title}</h2>
//       <p>{description}</p>
//     </li>
//   );
// }

// function Quiz() {
//   return (
//     <div id="app" data-testid="app">
//       <h1>Time to Practice</h1>
//       <p>One course, many goals! 🎯</p>
//       <ul>
//        <CourseGoal
//        title="learn react"
//        description="learn props in react"
//        />
//        <CourseGoal
//         title="Practice"
//        description="Practice working with React, components etc"
//        />
//       </ul>
//     </div>
//   );
// }

// export default Quiz;

// function Card (props){
//     return(
//         <article className="card">
//         <h2>{props.name}</h2>
//         {props.children}
//         </article>
//         );
    
// }
// function Quiz() {
//   return (
//     <div id="app">
//       <h1>Available Experts</h1>
//       <Card name="Anthony Blake">
//         <p>
//           Blake is a professor of Computer Science at the University of
//           Illinois.
//         </p>
//         <p>
//           <a href="mailto:blake@example.com">Email Anthony</a>
//         </p>
//       </Card>

//       <Card name="Maria Miles">
//         <p>
//           Maria is a professor of Computer Science at the University of
//           Illinois.
//         </p>
//         <p>
//           <a href="mailto:blake@example.com">Email Maria</a>
//         </p>
//       </Card>
//     </div>
//   );
// }
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

function Todo({title}){
  return (
    <li>{title}</li>
  )
}

function Quiz(){
  return (
    <ul>
      {DUMMY_TODOS.map((todoItem) => (
        <Todo key={todoItem} title={todoItem} />
      ))}
    </ul>
  )

}
export default Quiz;
