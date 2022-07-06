 import * as React from "react"
 import { StaticImage } from "gatsby-plugin-image"
 
 const Bio = () => {
  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        objectPosition="50% 50%"
        formats={["auto", "webp"]}
        src="../../static/assets/logo-idea1-250px-whiteshadow.png"
        quality={95}
        alt="RBL Logo"         
      />
    </div>
   )
 }
 
 export default Bio
 