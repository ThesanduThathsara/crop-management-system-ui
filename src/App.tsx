import {useState} from 'react'
import './App.css'
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import Field from "./pages/Field.tsx";
import Crop from "./pages/Crop.tsx";
import Staff from "./pages/Staff.tsx";
import Log from "./pages/Log.tsx";
import Vehicle from "./pages/Vehicle.tsx";
import {Helmet} from "react-helmet";
import Equipment from "./pages/Equipment.tsx";


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Helmet>
                <meta name="description" content="Crop monitoring system "/>
                <meta name="keywords" content="Green Shadow (Pvt) Ltd "/>
                <meta name="author" content="Thesandu Thathsara"/>
                <title>Crop Monitoring System </title>
                <link rel="icon" type="image/x-icon" href="assets/green-shadow-high-resolution-logo-transparent.png"/>
            </Helmet>
            <Equipment/>
        </>
    )
}

export default App
