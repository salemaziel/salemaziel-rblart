import React, { useState } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
//import { StaticImage } from "gatsby-plugin-image"
//import Pic01 from '../../static/assets/pic01.jpg'

const AccordionImage = ({ title, image, content, text }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div 
        className="cursor-pointer"
        style={{ marginBottom: '2em'}}
        onClick={() => setIsActive(!isActive)}
        >
            <h3 className='text-center'>{title}</h3>


                {isActive && 
                <Fade>
                    <span className="image main">
                    <div
                        className="cursor-pointer"
                        id="accordion"
                    >
                    {/*<StaticImage
                        formats={["auto", "webp"]}
                        src={image}
                        alt="Intro"
                    />*/}   
                    <img src={image} alt={title} />
                    </div>
                        <div className="accordion-content">
                            <p>{content}</p>
                        </div>
                    </span>
                </Fade>}
                    
        </div>
    )
};
export default AccordionImage;