import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { RiFacebookBoxFill } from "@react-icons/all-files/ri/RiFacebookBoxFill"
import { RiTwitterFill, } from "@react-icons/all-files/ri/RiTwitterFill"
import { RiInstagramFill } from "@react-icons/all-files/ri/RiInstagramFill"
import { RiGithubFill } from "@react-icons/all-files/ri/RiGithubFill"
import { RiYoutubeFill, } from "@react-icons/all-files/ri/RiYoutubeFill"

import Form from './form'
import Services from './Pages/services/services'

const Main = (props) => {
  const close = <div className="close" onClick={() => {props.onCloseArticle()}}></div>

  return (
      <div ref={props.setWrapperRef} id="main" style={props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="services" className={`${props.article === 'services' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>

        <Services
          image="../../static/assets/pic01.jpg"
          title="Services"
          />

          {close}
        </article>

        <article id="philosophy" className={`${props.article === 'philosophy' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        {/*<Link to="https://mansbooks.com" rel="noopener noreferrer" target="_blank" area-label="Mansbooks">*/}
          <h2 className="major">Philosophy and Values</h2>
        {/*</Link>*/}
          <span className="image main">
           {/*} <Link to="https://mansbooks.com" rel="noopener noreferrer" target="_blank" area-label="Mansbooks">*/}
              <StaticImage
                formats={["auto", "webp"]}
                src="../../static/assets/revolutionary-crop2-resize.jpg"
                alt="Work" 
              />
           {/*} </Link>*/}
          </span>
          <h3>Coming Soon</h3>
          <br />
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article id="consultations" className={`${props.article === 'consultations' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
         {/* <Link to="" rel="noopener noreferrer" target="_blank" area-label="">*/}
            <h2 className="major">Consultations</h2>
          {/*</Link>*/}
          <span className="image main">
           {/*} <Link to="https://" rel="noopener noreferrer" target="_blank" area-label="">*/}
              <StaticImage
                formats={["auto", "webp"]}
                src="../../static/assets/consultation-1920.jpg"
                alt="Consultations" 
              />
           {/*} </Link>*/}
          </span>
          <p>
            Two 60 Minute sessions: 
            <br />
            <br />
            <ol>
              <li>
                Discovery Session: We discuss your business or sidehustle, your goals for them, technology currently in use, analyze your current strategy, determine what can be improved, what can be added or removed, and where your pain points are.
              </li>
              <br />
              <li>
                Strategy Session: Based on the information we provided in the Discovery Session, we will create a strategy for your business or sidehustle. We will offer recommendations on your strategy, suggestions on workflows you can automate, show you the best tools your business can be utilizing, and setup a plan to implement them.
                </li>
              </ol>
          </p>
          <br />
          <Form formName="consultations" />
          {close}
        </article>


        <article id="1312" className={`${props.article === '1312' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <Link to="" rel="noopener noreferrer" target="_blank" area-label="">
            <h2 className="major">1312</h2>
          </Link>
          <span className="image main">
            {/*<Link to="https://" rel="noopener noreferrer" target="_blank" area-label="">*/}
              <StaticImage
                formats={["auto", "webp"]}
                src="../../static/assets/revolutionary-crop2-resize.jpg"
                alt="ACAB" 
              />
           {/*} </Link>*/}
          </span>
          <h3>Coming Soon</h3>
          <br />
            <Form formName="1312" />
          {close}
        </article>


        <article id="art" className={`${props.article === 'art' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
         {/*  <Link to="" rel="noopener noreferrer" target="_blank" area-label="">*/}
            <h2 className="major">Art</h2>
         {/*  </Link>*/}
          <span className="image main">
            {/*<Link to="https://" rel="noopener noreferrer" target="_blank" area-label="">*/}
              <StaticImage
                formats={["auto", "webp"]}
                src="../../static/assets/G and B jpg-01.jpg"
                alt="Artist" 
              />
          {/*  </Link>*/}
          </span>
          <h3>Coming Soon</h3>
          <br />
          <blockquote>
          Artists of today would rather usher in a decorative doomsday instead of trying to inspire the revolutionaries of tomorrow.
          </blockquote>
          {close}
        </article>





        <article id="contact" className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact Form</h2>
          <form
            className="contact-form"
            action="/thanks"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <Link to="" className="icon" rel="noopener noreferrer" target="_blank" area-label="">
                <RiTwitterFill alt='Twitter'
                  style={{
                    fontSize: "2rem",
                    color: "gray",
                  }}
                />
                <span className="label">Twitter</span>
              </Link>
            </li>
            <li>
              <Link to="" className="icon" rel="noopener noreferrer" target="_blank" area-label="">
                <RiFacebookBoxFill alt='Facebook'
                  style={{
                    fontSize: "2em",
                    color: "gray",
                  }}
                />
                <span className="label">Facebook</span>
              </Link>
            </li>
            <li>
              <Link to="" className="icon" rel="noopener noreferrer" target="_blank" area-label="">
                <RiInstagramFill alt='Instagram'
                  style={{
                    fontSize: "2em",
                    color: "gray",
                  }}
                />
                <span className="label">Instagram</span>
              </Link>
            </li>
            <li>
              <Link to="" className="icon" rel="noopener noreferrer" target="_blank" area-label="">
                <RiGithubFill alt='Github'
                  style={{
                    fontSize: "2em",
                    color: "gray",
                  }}
                />
                <span className="label">GitHub</span>
              </Link>
            </li>
            <li>
              <Link to="" className="icon" rel="noopener noreferrer" target="_blank" area-label="">
                <RiYoutubeFill alt='Youtube'
                  style={{
                    fontSize: "2em",
                    color: "gray",
                  }}
                />
                <span className="label">Youtube</span>
              </Link>
            </li>
          </ul>
          {close}
        </article>

      </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main