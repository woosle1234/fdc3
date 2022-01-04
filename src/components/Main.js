import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom"
import Dashboard from "./Dashboard";
import Project from "./Project";


function Main(){
    return(
        <Router>
            <Routes>
                <Route exact path="dashboard" element={<Dashboard />} />
                <Route exact path="project" element={<Project />} />
                <Route exact path="/" element={<Dashboard />} />
            </Routes>
        </Router>
    )
}

export default Main