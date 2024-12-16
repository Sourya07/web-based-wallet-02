import { useState } from 'react'
import { CounterCount } from '../context'
import './App.css'
import Button from './Button'
import { useContext } from 'react'
function App() {
  const counter = useContext(CounterCount);

  return (
    <>
      <div>Context api {counter.count} </div>
      <Button />
      <br />
      <Button />

    </>

  )
}

export default App
