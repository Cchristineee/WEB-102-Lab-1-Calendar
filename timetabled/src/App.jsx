import { useState } from 'react'
import './App.css';
import Calendar from './Components/Calendar'

const App = () => {

  return (
    <div className="App">
      <h1>Itinerary for 7 Days in Miami 🌴</h1>
      <h2>Welcome to Miami, FL! Check out this calendar to plan your trip.</h2>
      <Calendar />
    </div>
  )
}

export default App

