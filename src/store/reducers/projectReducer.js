const initState = {
    projects: [
        {id: '1', title: 'Project Title 1', content: 'Project Content 1'},
        {id: '2', title: 'Project Title 2', content: 'Project Content 2'},
        {id: '3', title: 'Project Title 3', content: 'Project Content 3'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state;
};

export default projectReducer;