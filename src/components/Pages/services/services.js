import React, { useState } from 'react'
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from 'prop-types'
import AccordionImage from '../../accordion-image';
import Pic01 from '../../../../static/assets/pic01.jpg'
import Automation from '../../../../static/assets/workflow-automation-final.jpg'
import Server from '../../../../static/assets/terminal-2-640x287.jpg'
import WebDev from '../../../../static/assets/smartmockups_glp.png'
//import Pic02 from '../../static/assets/pic02.jpg'
//import Pic03 from '../../static/assets/pic03.jpg'

const Services = (props) => {
  //  const [isActive, setIsActive] = useState(false);
  const webdevContent = () => (
    <div className>
      <p> Custom web design and development of beautiful, functional websites that are easy to use, easy to navigate, and are fully responsive web pages optimized for all devices and browsers.
      </p>
    </div>
  )

  const webhostingContent = () => (
    <div className>
      <p> You're paying too much to host your Wordpress website or blog. </p>
      <p>Middle-man hosters are buying cloud servers for a few dollars a month, then turning around and charging you 4 times what they're paying, and giving you less than half as much computing power.
      </p>
      <p> We help you cut out that middle-man: You can host your existing website on our servers, or we can help you host it yourself on your own cloud server, for less than you're currently paying.
      </p>
    </div>
  )
  const serverContent = () => (
    <div className>
      <p> You're paying too much to host your Wordpress website or blog. </p>
      <p>Middle-man hosters are buying cloud servers for a few dollars a month, then turning around and charging you 4 times what they're paying, and giving you less than half as much computing power.
      </p> 
      <p>We help you cut out that middle-man: You can host your existing website on our servers, or we can help you host it yourself on your own cloud server, for less than you're currently paying.
      </p>
    </div>
  )
  const automationContent = () => (
    <div className>
      <p>E-commerce automation for Shopify, Magento, Woocommerce and more.</p>
    </div>
  )

  const consultationContent = () => (
    <div className>
      <p>E-commerce automation for Shopify, Magento, Woocommerce and more.</p>
    </div>
  )

  const accordionData = [
    {
      title: 'Web Design & Development',
      image: WebDev,
      content: webdevContent(),
      text: "Web Design & Development"
    },
    {
      title: 'Website Hosting',
      image: Server,
      content: webhostingContent(),
      text: "Website hosting"
    },
    {
      title: 'Linux/Cloud Server Management',
      image: Server,
      content: serverContent(),
      text: "Beautiful promotional landing page, customized to fit you."
    },
    {
      title: 'Automation',
      image: Automation,
      content: automationContent(),
      text: "Beautiful promotional landing page, customized to fit you."
    },
    {
      title: 'Consultation',
      image: Pic01,
      content: consultationContent(),
      text: "Beautiful promotional landing page, customized to fit you."
    }
  ];

  return (
    <>
      <h2 className="major">{props.title}</h2>
      {accordionData.map(({ title, image, content, text }) => (
        <AccordionImage title={title} image={image} content={content} text={text} />
      ))}


      {/* <span className="image main">
           <div 
            className="cursor-pointer"
            id="accordion"
            onClick={() => setIsActive(!isActive)}
           >
              <StaticImage
                formats={["auto", "webp"]}
                src='../../../../static/assets/pic01.jpg'
                alt="Intro" 
              />
            </div>
          {isActive && <div className="accordion-content">{props.content}</div>}
          </span>
          <p>
            {props.text1}
          </p>
          <span className="image main">
           <div 
            className="cursor-pointer"
            id="webdev"
            onClick={() => setIsActive(!isActive)}
           >
              <StaticImage
                formats={["auto", "webp"]}
                src='../../../../static/assets/pic01.jpg'
                alt="Intro" 
              />
            </div>
          {isActive && <div className="webdev-content">{props.content}</div>}
          </span>
          <p>
            {props.text2}
          </p>
          <span className="image main">
            <div 
            className="cursor-pointer"
            id="automation"
            onClick={() => setIsActive(!isActive)}
           >
              <StaticImage
                formats={["auto", "webp"]}
                src='../../../../static/assets/pic01.jpg'
                alt="Intro" 
              />
            </div>
          {isActive && <div className="automation-content">{props.content}</div>}
          </span>
          <p>
              {props.text3}
          </p>
          <span className="image main">
          <div 
            className="cursor-pointer"
            id="hosting"
            onClick={() => setIsActive(!isActive)}
           >
              <StaticImage
                formats={["auto", "webp"]}
                src='../../../../static/assets/pic01.jpg'
                alt="Intro" 
              />
            </div>
          {isActive && <div className="hosting-content">{props.content}</div>}
          </span>
          <p>
              {props.text4}
          </p> */}
    </>
  )
};

Services.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  text: PropTypes.string,
  content: PropTypes.object,
}


export default Services