import React from "react";

export default function ProjectSummary({project}) {
    return (
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title blue-text">{project.title}</span>
                    <p className="orange-text">{project.content}</p>
                    <p className="grey-text">5th of May, 2022</p>
                </div>
            </div>
    )
}