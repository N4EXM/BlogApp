import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import UserAnalytics from './pages/dashboardPages/UserAnalytics'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <UserAnalytics/>
          }
          path='/Analytics'
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App