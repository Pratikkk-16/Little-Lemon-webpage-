import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Main from './Components/Main'
import Footer from './Components/Footer'
function App() {
    return(
        <>
            <Header/>
            <Nav/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App
