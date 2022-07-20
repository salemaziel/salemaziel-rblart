import React from "react"
import { Link } from "gatsby"
import { RiArrowRightSLine } from "@react-icons/all-files/ri/RiArrowRightSLine"
import { RiArrowLeftSLine } from "@react-icons/all-files/ri/RiArrowLeftSLine"
import { RiCheckboxCircleLine } from "@react-icons/all-files/ri/RiCheckboxCircleLine"
import Layout from "../components/layout"

const Privacy = () => (
  <Layout>
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "gray",
        }}
      />
      <h1>Privacy</h1>
        <p>
          <h2> User data encrypted</h2>

            <p>⚓ The privacy of my visitors is extremely important.</p>

            <p>This Privacy Policy outlines the types of personal information that is received and collected and how it is used.</p>

            <p>First and foremost, I will never share your email address or any other personal information to anyone without your direct consent.</p>

          <h2>Log Files</h2>

            <p>🏴󠁡󠁦󠁬󠁯󠁧󠁿 Like many other websites, this site uses log files to help learn about when, from where, and how often traffic flows to this site. The information in these log files include:</p>
            <div>
              - Internet Protocol addresses (IP)
              - Types of browser
              - Internet Service Provider (ISP)
              - Date and time stamp
              - Referring and exit pages
            </div>
            All of this information is not linked to anything that is personally identifiable.

           {/*<h2>Cookies And Beacons</h2>*/}

         {/*} <p>🍪 When you visit this site "convenience" cookies are stored on your computer when you submit a comment to help you log in faster to 
             🔗 \* <Link to="https://twitter.com/salemamb760" alt="Twitter">Twitter</Link> the next time you tweet.</p>   */}         
        </p>
        <Link to="/" className="button">
          <RiArrowLeftSLine className="button-icon"
            style={{
              fontSize: "1.5rem",
              color: "gray",
            }}
          />
            Back to Homepage
        </Link>
       {/*} <Link to="https://salemaziel.com" className="button -outline" rel="noopener noreferrer" target="_blank" area-label="Salem Aziel">
          Full Privacy Page 
          <RiArrowRightSLine className="button-icon"
            style={{
              fontSize: "1.5rem",
              color: "gray",
            }}        
          />          
          </Link>*/}
    </div>
  </Layout>
)

export default Privacy
