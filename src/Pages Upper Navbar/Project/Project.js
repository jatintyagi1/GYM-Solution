import React from 'react'
import './project.css'
import ProjectImage from '../../Assets/images/ProjectImage'


const Project = () => {
  return (
    <div className='middle-container-wrapper'>
      <h3 className='top-our-project-text'>OUR PROJECTS</h3>     
      <div className='image-grid'>
        {ProjectImage.map((image, index) => (
          <div className='project-container' key={index}>
            <div className='image-container'>
            <img src={image.src} alt={image.alt} />
            </div>
            <div className='image-content'>
              <h4 className='image-title'>{image.title}</h4>
              <p className='image-description'>{image.description}</p>
              <button className='image-button'>{image.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project;