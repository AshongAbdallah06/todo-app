import React from 'react';
import mobileBgDark from '../images/bg-mobile-dark.jpg';
import mobileBgLight from '../images/bg-mobile-light.jpg';
import desktopBgDark from '../images/bg-desktop-dark.jpg';
import desktopBgLight from '../images/bg-desktop-light.jpg';


const BackgroundImage = ({ darkTheme }) => {
    const width = window.innerWidth;

    return (
        <div style={{width: '100%'}}>
            <img 
                style={{display: width > 500 ? 'none' : 'initial'}}
                src={
                // width > 500 && !darkTheme ? desktopBgLight : desktopBgDark
                    width < 500 && !darkTheme ? mobileBgLight : mobileBgDark
            } className='bg-image' alt="" />
            <img 
                style={{display: width < 500 ? 'none' : 'initial'}}
                src={
                    width > 500 && !darkTheme ? desktopBgLight : desktopBgDark
                // width < 500 && !darkTheme ? mobileBgLight : mobileBgDark
            } className='bg-image' alt="" />
        </div>
    )
}

export default BackgroundImage