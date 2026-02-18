import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/Login'
import BoardGame from './pages/BoardGamePage'
// import { MantineProvider } from '@mantine/core';

function App() {

  return (
    <>
      <LoginPage />
      <BoardGame category={"fruits"} />
    </>
  )
}

export default App
