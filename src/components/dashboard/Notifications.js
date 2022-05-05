import React from 'react'
import {Route, Routes} from "react-router-dom";
import ProjectList from "../projects/ProjectList";

export default function Notifications(){
    return (
        <div>
            <p className="center">Notifications</p>
            <Routes>
                <Route path="/" element={<ProjectList />} />
            </Routes>
        </div>
    )
}

