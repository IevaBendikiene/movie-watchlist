import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Watchlist from './components/Watchlist'
import Watchedlist from './components/Watchedlist'
import Home from './components/home/Home'
import { GlobalProvider } from './cotext/GlobalState'


export default function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/watched" element={<Watchedlist />} />
        </Routes>
      </BrowserRouter>
   </GlobalProvider>    
  )
}

