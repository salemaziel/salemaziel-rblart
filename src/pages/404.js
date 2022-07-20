import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine } from "@react-icons/all-files/ri/RiArrowLeftSLine"
//import { RiBugLine } from "@react-icons/all-files/ri/RiBugLine"
import { RiSkullLine } from "@react-icons/all-files/ri/RiSkullLine"

import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <header>
        <RiSkullLine
          style={{
            fontSize: "128px",
            color: "gray",
          }}
        />
        <h1>Oops we did not expect that to happen!</h1>
        <p>
          Have you wondered into the unknown. Let us help you, Please take a look
          at below options
        </p>
      </header>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="button-icon"
          style={{
            fontSize: "1.5rem",
            color: "gray",
          }}
        />
        Back to Homepage
      </Link>
      {/*<Link to="" className="button -outline">
        Report this 
        <RiBugLine className="button-icon"
          style={{
            fontSize: "1.5rem",
            color: "gray",
          }}        
        />
        </Link>*/}
    </div>
  </Layout>
)

export default NotFound
