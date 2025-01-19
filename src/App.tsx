import { useState } from 'react'
import './App.css'
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import Field from "./pages/Field.tsx";
import Crop from "./pages/Crop.tsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Crop/>
    </>
  )
}

export default App
