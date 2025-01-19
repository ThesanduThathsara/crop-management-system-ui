import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './pages/Login.tsx'
import './App.css'
import Login from "./pages/Login.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Login/>
    </>
  )
}

export default App
