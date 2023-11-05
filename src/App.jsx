import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Bookmarked from "./Pages/BookmarkedPage";
import "./main.css"

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/bookmarked" Component={Bookmarked}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
