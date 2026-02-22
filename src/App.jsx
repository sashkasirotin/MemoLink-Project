import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/Login'
import BoardGame from './pages/BoardGamePage'
//import LoginPage from './components/Login'
import HomePage from './pages/HomePage'
// import { MantineProvider } from '@mantine/core';
import AuthProvider from './auth/AuthProvider'

function App() {

  return (
    <>
      <BoardGame category={"fruits"} />
      {/* <AuthProvider >
        <HomePage />
      </AuthProvider> */}
    </>
  )
}

export default App
