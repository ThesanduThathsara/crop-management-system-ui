import { useState } from 'react'
import './App.css'
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import Field from "./pages/Field.tsx";
import Crop from "./pages/Crop.tsx";
import Staff from "./pages/Staff.tsx";
import Log from "./pages/Log.tsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Log/>
    </>
  )
}

export default App
