import { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { HotelContext } from './context'
import './App.scss'
import HotelsPage from './pages/HotelsPage/HotelsPage'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <HotelContext.Provider
      value={{
        isLoading,
      }}
    >
      <Router>
        <HotelsPage />
      </Router>
    </HotelContext.Provider>
  )
}

export default App
