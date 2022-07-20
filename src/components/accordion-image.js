import React, { useState } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
//import { StaticImage } from "gatsby-plugin-image"
//import Pic01 from '../../static/assets/pic01.jpg'

const AccordionImage = ({ title, image, content, text }) => {
    const [isActive, setIsActive] = useState(true);
    return (
        <>
        <div 
        className="cursor-pointer"
        style={{ marginBottom: '2em'}}
        onClick={() => setIsActive(!isActive)}
        >
            <h3 className='text-normal' >{title}</h3>
        </div>
        

                {isActive && 
                <Fade>
                    <span className="image main">
                    <div
                        className=""
                        id="accordion"
                    >
                        <div className="accordion-content">
                            <p style={{marginBottom: '0'}}>{text}</p>
                        </div>
                    <img src={image} alt={title} style={{ padding: '1rem' }}/>
                    </div>
                        <div className="accordion-content">
                            <p>{content}</p>
                        </div>
                    </span>
                    
                </Fade>
                }
       
        </>
    )
};
export default AccordionImage;