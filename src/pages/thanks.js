import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine } from "@react-icons/all-files/ri/RiArrowLeftSLine"
import { RiCheckboxCircleLine } from "@react-icons/all-files/ri/RiCheckboxCircleLine"
import Layout from "../components/layout"

const Thanks = () => (
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
      <h1>Got your message</h1>
      <p>Thank you for getting in touch us. We will get back to you shortly.</p>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="button-icon"
          style={{
            fontSize: "1.5rem",
            color: "gray",
          }}        
        />
        Lets go back to Homepage
      </Link>
    </div>
  </Layout>
)

export default Thanks
