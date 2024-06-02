import React, { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import { Home, CreatePost } from './pages'
import Chat from './pages/Chat'
import Navbar from './components/Navbar'

const App = () => {
  const [mode, setMode] = useState("light");

  return (
    <HashRouter>
      <Navbar mode={mode} />

      <main className={`${mode == "light" ? "bg-main-light" : "bg-main-dark"} sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-61px)] relative`}>
        <Routes>
          <Route path="/" element={<Home mode={mode} />} />
          <Route path="/create-post" element={<CreatePost mode={mode} />} />
          <Route path="/chat" element={<Chat mode={mode} />} />
        </Routes>
      </main>
    </HashRouter>
  )
}

export default App