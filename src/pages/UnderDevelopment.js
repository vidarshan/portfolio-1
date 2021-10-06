import React from 'react'
import '../scss/development.scss';

const UnderDevelopment = () => {
    return (
        <div className='under-dev'>
            <img src={require('../img/development.gif').default} alt="" />
            Under Development
        </div>
    )
}

export default UnderDevelopment
