import React from 'react'

function ProjectDetails(props) {
    const id= props.match.params.id;
    return (
        
        <div className='container section project-details'>
          <div className='card z-depth -0'>
            <div className='card-content'>
              <span className='card-title'> Project Title - {id}</span>
              <p>lorem njfdsDFsssssssssssssss fvsdkdwnvfkjvndjskvn  vDSJnvdjkvndkjV nmdSVdjsnvdjsvndkjvndkjnvkjdVNdkjvndkjvnds dJvndsjKvndsjkvndjskvds</p>
            </div>
            <div className='card-action lightenn-4 grey-text'>
              <div> Posted by</div>
              <div>2nd July 2020</div>
            </div>
          </div>
            
        </div>
    )
}

export default ProjectDetails
