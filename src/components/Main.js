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
        {/*<Link to="#" rel="noopener noreferrer" target="_blank" area-label="">*/}
          <h2 className="major">Philosophy and Values</h2>
        {/*</Link>*/}
          <span className="image main">
           {/*} <Link to="#" rel="noopener noreferrer" target="_blank" area-label="">*/}
              <StaticImage
                formats={["auto", "webp"]}
                src="../../static/assets/revolutionary-crop2-resize.jpg"
                alt="Work" 
              />
           {/* </Link>*/}
          </span>
          <h3>Values</h3>
          <br />
          <p><strong>
            <em>All humans and living things are sacred and we should intent to treat each with respect for their own sake, to benefit of the most as possible, and not ever as a means for a selfish end.</em></strong>
          </p>
          <p>
          <strong>
          <em>
            We should strive to be as honest, as kind, as transparent, as empathetic, as open-minded yet as evidence-based as possible.</em></strong>
          </p>
          <p>
            The result of these values has led me to these beliefs:
          </p>
          <hr />

          <h4>
                  <strong>Black Lives (and Brown Lives, and Native Lives, and Asian Lives, and Arab Lives, and Jewish Lives) Matter. </strong> </h4>
          <p>
                  <br />
                  It's not that White lives don't matter; it's that non-white lives are the ones being disproportionately affected by legal and economic systems deeply ingrained into our society. The United States was founded on high ideals that its laws fail miserably at living up to. A system ingrained so strongly implemented with racial discrimination that <a href="https://www.law.nyu.edu/sites/default/files/upload_documents/Hitler%27s%20American%20Model%20for%20NYU.pdf" rel="noopener noreferrer" target="_blank" style={{ fontStyle: "italic" }}> Hitler himself looked up to it as a model for his own </a> does not disappear overnight, or even in a few decades. <strong>White lives have always mattered to our justice system; non-white lives have not.</strong> That's why these statements and movements are necessary.
          </p>
          <p>
            "All Lives Matter" is an empty, virtue-signaling statement that is entirely meaningless, and just serves to distract and deflect from the racial disparities being brought up. It's never used as the driving philosophy behind any movements or policies to better All Lives; it's not intended to.
          </p>
          <p>
            What? I'm wrong? Dope! I'll see you at the next All Lives Matter rally then!
            <br />
            Lmao. No I won't. Because there aren't any. Because it's not a real movement. It's a distraction. 
          </p>
          <hr />
          <h4>
          Support for LGBTQIA Rights
          </h4>
          <p>
          The advocacy for LGBTQIA rights extends beyond mere acceptance. It is a fight for recognition, equality, and the right to exist without fear. This value reflects my belief in the importance of personal freedom, love, and the right to express one’s identity without fear of reprisal. It’s about ensuring that everyone, regardless of their gender identity or sexual orientation, can live authentically and openly. Everyone deserves the right to love, live, and identify as they see fit.
          </p>
          <p>
          "But it's a mental illness!"
          <br />
          It's not, anyone with a basic understanding of psychology knows that. But even if it was, so what? That doesn't mean they don't deserve the same rights as everyone else. It also would mean that you're actively trying to make life harder for people with a mental illness, which still makes you a piece of shit. This isn't the argument you think it is. 
          </p>
          <p>
            "But what about the children?! They're sexualizing them and that's bad!!"
            <br />
            Yeah, you're right, it is bad; it would be if that were true anyways. If you really want to protect children, start with the churches, which are so prevalent with child sexual abuse that <a href='https://www.ministryinsured.com/church-insurance/liability/abuse-molestation/' rel="noopener noreferer" target="_blank" > insurance companies have starting offering liability policies for it.</a>
            <br />
            That's not a problem drag shows have ever had.
          </p>
          <hr />
          <h4>
          Housing for the Homeless
          </h4>
          <p>
            There's more empty houses in America than homeless people. You know how to solve the homeless issue? Give them houses; it's not that fucking hard.
          </p>
          <hr />
          <h4>
          Food for the Hungry
          </h4>
          <p>
            Feed people. All people. End of story.
          </p>
          <p>
            You saw someone take food from a grocery store? No you fucking didn't. 
          </p>
          <hr />
          <h4>
          Ending the Drug War
          </h4>
          <p>
            I can write a whole research article on this one; in fact I have (will link to it later).
            Fuck the drug war, fuck the DEA, fuck ICE, fuck the police and everyone else enforcing this this.
          </p>
          <p>
            Oh yeah, and to the Sackler family: Justice hasn't gotten you yet, but it will.
          </p>
          <hr />
          <h4>
          Evolving Past Capitalism
          </h4>
          <p>
          Let’s be honest, capitalism is wreaking havoc. It’s a system that allows a select few to hoard wealth while literally leaving others to die. The planet can’t take it, and neither can the majority of us. It’s clear we’ve got to evolve past the fantasy that profit-driven incentives are best if we want to have a shot at a sustainable and fair future. We need to evolve, and fast, towards an economic model that values all of us, not just the select few. The harder those select few make this evolution for all of us, the more painful it's going to be for them. 
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