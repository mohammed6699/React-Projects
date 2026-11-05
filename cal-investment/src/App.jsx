import { useState } from "react"
import Header from "./components/Header"
import OutputTable from "./components/OutputTable"
import UserInputCard from "./components/UserInputCard"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10,
    })
    function handleChange(inputIdentifer, newValue){
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifer]: +newValue
            }
        })
    }
    const inputIsValid = userInput.duration >= 1; 
  return (
    <>
      <Header />
      <UserInputCard onChange={handleChange} />
      {inputIsValid ? <OutputTable inputData={userInput} /> : <p className="center">Please enter a valid duration (at least 1 year).</p>}
    </>
  )
}

export default App
