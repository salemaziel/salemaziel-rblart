import React, { useState } from 'react'
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from 'prop-types'
import AccordionImage from '../../accordion-image';
import Pic01 from '../../../../static/assets/pic01.jpg'
import Automation from '../../../../static/assets/workflow-automation-final.jpg'
import Ecommerce from '../../../../static/assets/ecommerce-platforms.jpg'
import Server from '../../../../static/assets/terminal-2-640x287.jpg'
import WebDev from '../../../../static/assets/smartmockups_glp.png'
import WebHost from '../../../../static/assets/Top-10-hosting-accounting.jpg'
import Form from '../../form';
import { platformsContainer, platforms } from "./services.module.css"

const Services = (props) => {
  //  const [isActive, setIsActive] = useState(false);
  const webdevContent = () => (
    <div className>
      <h3>Platforms:</h3>
      <div className={platformsContainer}>
        <div className={platforms}>
      <p >
        <ul>
          <li>Wordpress</li>
          <li>Shopify</li>
          <li>Squarespace</li>
          <li>Wix</li>
        </ul>
      </p>
      </div>
      <div className={platforms}>
      <p>
        <ul>
          <li>Gatsby</li>
          <li>Next.js</li>
          <li>React</li>
          <li>Custom HTML/CSS</li>
        </ul>
      </p>
      </div>
    </div>
    <p>Don't care how it's made, you just need a dope website? I got you too.</p>
    <Form formName="webdev" />
    </div>
  )

  const webhostingContent = () => (
    <div className>
      <p>Middle-man hosters are buying cloud servers for a few dollars a month, then turning around and charging you 4 times what they're paying, and giving you less than half as much computing power.
      </p>
      <p> We help you cut out that middle-man - Let us teach you how to host your digital real estate for less than you're currently paying.
      </p>
      <p>
        You can also host your existing website on our servers at fair and transparent prices.
      </p>

      <Form formName="webhosting" />
    </div>
  )

  const ecomOptimizationContent = () => (
    <div className>
      <p>
        Problems are your shop is not optimized for search engines, not optimized for your customers, or not optimized for your business.
      </p>
      <p>Let us help you optimize your e-commerce shop for maximum sales. </p>
      <Form formName="ecomopt" />
    </div>
  )
  const workAutomationContent = () => (
    <div className>  
    <p>
        We can help you automate your workflow by connecting the apps you use every day and cut out the busy work.
      </p>
      <p>
        Setup trigger events, like receiving a new sign up on your website.When your trigger event happens, your automation flow begins: you can automatically send your new sign up a welcome email, add them to your mailing list, and add a reminder to your calendar to follow up with them.
      </p>
      <p>
        The automation flow is fully customizable, and you can add as many apps as you need. The possibilities are endless.
      </p>
      <Form formName="workautomation" />
    </div>
  )

  const serverContent = () => (
    <div className>
      <p>
        Linux server and Cloud Server assistance (AWS, GCP, Azure, Digital Ocean, Vultur, Linode, and more)
      </p>
      <p>
        We can help you plan and manager your Cloud architecture, deploy your apps, scale horizontally and vertically, and manage your infrastructure, whether it's a single server or a multi-server cluster.
      </p>
      <Form formName="server" />
    </div>
  )

  const consultationContent = () => (
    <div className>
      <p>
        Schedule a private 1 v 1 consultation with me to learn how to make your digital real estate work for you.
      </p>
      <Form formName="consult" />
    </div>
  )

  const accordionData = [
    {
      title: 'Web Design & Development',
      image: WebDev,
      content: webdevContent(),
      text: "Custom web design and development of beautiful, functional websites that are easy to use, easy to navigate, and are fully responsive web pages optimized for all devices and browsers."
    },
    {
      title: 'Website Hosting',
      image: WebHost,
      content: webhostingContent(),
      text: "You're paying too much for web hosting."
    },
    {
      title: 'E-Commerce Optimization',
      image: Ecommerce,
      content: ecomOptimizationContent(),
      text: "Your E-Commerce shop could use some help."
    },
    {
      title: 'Workflow Automation',
      image: Automation,
      content: workAutomationContent(),
      text: "Stop wasting time and money doing repetitive tasks manually."
    },
    {
      title: 'Linux/Cloud Server Management',
      image: Server,
      content: serverContent(),
      text: "Linux and cloud server administration assistance, advice, full-service options."
    },
    {
      title: 'Consultation',
      image: Pic01,
      content: consultationContent(),
      text: "You've got something big on your mind, but aren't sure what technology to use."
    }
  ];

  return (
    <>
      <h2 className="major">{props.title}</h2>
      {accordionData.map(({ title, subtitle, image, content, text }) => (
        <AccordionImage title={title} subtitle={subtitle} image={image} content={content} text={text} />
      ))}

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