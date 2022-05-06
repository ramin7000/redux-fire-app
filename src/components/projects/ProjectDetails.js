import React from 'react'

export default function ProjectDetails(props) {
    // const id = props.match.params.id;
    const id = props.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Detailes { id }</span>
                    <p>This is a literal note as details for the project that has been selected for now!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Some details and notes for project</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

