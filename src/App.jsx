import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Inputs } from './components/Inputs'
import './App.css'

function App() {

  const [currentOperator, setCurrentOperator] = useState('-')
  const [inputOne, setInputOne] = useState(0)
  const [inputTwo, setInputTwo] = useState(0)
  const [results, setResults] = useState(0)
  const [totalOperations, setTotalOperations] = useState(0)

  useEffect(() => {
    let operate = localStorage.getItem('totalOperations')
    console.log(typeof operate)
    console.log(operate)
    console.log(isNaN(operate))
    isNaN(operate) ? localStorage.setItem('totalOperations', Number(totalOperations)) : setTotalOperations(Number(operate))
  }, [])

  useEffect(() => {
    calculations()
  },[currentOperator,inputOne,inputTwo])

  useEffect(() => {
    updateOperations()
  }, [results])
  
  const updateOperations = () => {
      setTotalOperations(prevCount => {return (Number(prevCount += 1))})
      localStorage.setItem('totalOperations', Number(totalOperations + 1))
  }
    
  const updateOperator = (getOperator) => {
    setCurrentOperator(getOperator)
  }

  const updateInputs = (inOne, inTwo) => {
    setInputOne(inOne)
    setInputTwo(inTwo)
  }

  const updateResult = (getRes) => {
    setResults(getRes)
  }

  const calculations = () => {
    let res=0
    if (currentOperator === '+') {
      res = Number(inputOne) + Number(inputTwo)
    } else if (currentOperator === '-') {
        res = Number(inputOne) - Number(inputTwo)
    } else if (currentOperator === '/') {
        res = Number(inputOne) / Number(inputTwo)
    } else if (currentOperator === '*') {
        res = Number(inputOne) * Number(inputTwo)
    }
    setResults(res)
  }
  

  const reset = () => {
    setInputOne(0)
    setInputTwo(0)
    setResults(0)
    setCurrentOperator('+')
  }


  return (
    <div className='app'>
      <Header
      totalOperations={totalOperations}
      />
      <Inputs
        currentOperator={currentOperator}
        updateOperator={updateOperator}
        inputOne={inputOne}
        inputTwo={inputTwo}
        updateInputs={updateInputs}
        results={results}
        updateResult={updateResult}

      />
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
