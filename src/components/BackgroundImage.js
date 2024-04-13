import React from 'react';
import mobileBgDark from '../images/bg-mobile-dark.jpg';


const BackgroundImage = () => {
    return (
        <div style={{width: '100%'}}>
            <img src={mobileBgDark} className='bg-image' alt="" />
        </div>
    )
}

export default BackgroundImage