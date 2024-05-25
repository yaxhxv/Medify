import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
 
 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CssBaseline />
     <Outlet />
    </>
  )
}

export default App
