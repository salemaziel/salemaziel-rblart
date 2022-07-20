import React from 'react'
import PropTypes from 'prop-types'
import Logo from "./logo"

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
          <Logo className="icon" />
        </div>
        <div className="content">
            <div className="inner">
              <h1 style={{ textShadow: "2px 2px 4px grey"}}>Salem Aziel</h1>
              <h2 style={{textShadow: '2px 2px 4px gray'}}>Tech For The People, For The Modern World.{' '}</h2>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('services')}}>Services</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('philosophy')}}>Philosophy</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('consultations')}}>Consultations</a></li>
                {/*<li><a href="https://salemaziel.com/blog" rel="noopener noreferrer" target="_blank" area-label="Salem Aziel Blog" /* onClick={() => {props.onOpenArticle('contact')}} * / >Blog</a></li>*/}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('1312')}}>1312</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('art')}}>Art</a></li>
            {/**     <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li> */}
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
