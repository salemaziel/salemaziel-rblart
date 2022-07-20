import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'
//import CookieConsent from "react-cookie-consent"
//import { SiGnuprivacyguard } from "@react-icons/all-files/si/SiGnuprivacyguard"

//import '../assets/css/main.css'
import '../assets/scss/main.scss'


const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'RBL Art Designs - Tech For the People.  Web development and tech consulting.' },
              { name: 'keywords', content: 'RBL Art Designs, RBL Art, web development, tech consulting, for the people' },
            ]}
          >
            <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
            <html lang="en" />
          </Helmet>
          {content}
          {/*<CookieConsent
            enableDeclineButton 
            flipButtons
            location="bottom"
            buttonText="Accept"
            declineButtonText="Decline"
            cookieName="gatsby-gdpr-google-analytics"
            style={{
              background: "linear-gradient(to right, transparent, #171717)",
              textShadow: "2px 2px black",
            }}
            buttonStyle={{
              background: "radial-gradient(circle at top right, #222, transparent)",
              color: "white",
              fontWeight: "bolder",
              borderRadius: '3px',
              border: "1px black",
              textShadow: "2px 2px black",
            }}
          >
            RBL Art Designs uses cookies for a better user experience.{" "}
            <span 
              style={{ 
                fontSize: "14px",
                textAlign: "center",
                marginLeft: "20px"
              }}
            >
              <span className="icon -lock">
                <SiGnuprivacyguard />
              </span>{" "} 
              <Link to='https://rblartdesign.com/privacy' alt='Privacy Page'>
                Privacy Page
              </Link>
            </span>
            </CookieConsent>*/}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
