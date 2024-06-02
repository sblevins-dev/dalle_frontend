import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import { Home, CreatePost } from './pages'
import Chat from './pages/Chat'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <HashRouter>
      <Navbar />

      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)] relative'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </main>
    </HashRouter>
  )
}

export default App