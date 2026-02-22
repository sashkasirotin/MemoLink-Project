import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/Login'
import BoardGame from './pages/BoardGamePage'
import HomePage from './pages/HomePage'
import CategoriesPage from './pages/CategoriesPage'
import { Route, Routes, useNavigate } from 'react-router'
import { redirect } from 'react-router'


// import { MantineProvider } from '@mantine/core';
import AuthProvider from './auth/AuthProvider'

function App() {

  return (
    <>
      {/* <BoardGame category={"fruits"} /> */}
      <AuthProvider >
        {/* <HomePage /> */}


        < Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/play/:category/:difficulty" element={<BoardGame />} />
          <Route path="/categories"
            element={
              <CategoriesPage />
              //<ProtectedRoute >
              // <ActorsPage />
              //</ProtectedRoute>
            } />
        </Routes >
      </AuthProvider>

    </>

  )
}

export default App
