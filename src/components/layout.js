/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import Icon from "./../assets/whatsapp-brands.svg";

import Header from "./header"
import "./layout.css"
import styled from "styled-components"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const Wrapper = styled.div`
  // max-width: 940px;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
`

  const Border = styled.div`
background: black;
`
  const Content = styled.div`
max-width: 940px;
display: flex;
flex-direction: row-reverse;
margin: auto;
`
  return (
    <>
      <Wrapper>
        <Border>
          <Content>
            <nav>
              <ul>
                <li><a href="#">Quienes somos</a></li>
              </ul>
            </nav>
          </Content>
        </Border>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        <div style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          padding: '2em'
        }}>
          <Icon style={{
            width: '40px',
          }} />

        </div>
      </Wrapper>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
