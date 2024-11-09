import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Add more routes as needed */}
    </Routes>
  )
}

export default App
