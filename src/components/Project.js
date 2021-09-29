import React from 'react'
import '../scss/project.scss';

const Project = () => {
    return (
        <div className='project-container'>
            <div className="project-heading-number">
                <div className="project-heading">🚀  Projects.</div>
                <div className="project-number">3/5</div>
            </div>
            <div class="project">
                <div class="project-name">Carmax ERP</div>
                <div class="project-image-desc">
                    <div class="project-image">
                        <img src={require('../img/placeholder.jpeg').default} alt="" />
                    </div>
                    <div class="project-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, pariatur delectus? Ipsam earum cumque facilis fugit obcaecati magnam sed in voluptatem consectetur recusandae, quasi dignissimos deleniti, soluta nihil. Minima, molestiae?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project