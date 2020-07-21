import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import JSONData from "../../content/My-JSON-Content.json"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

const Content = styled.div`

`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content>
      {JSONData.content.map((data, index) => (
        <Card key={`content_item_${index}`} {...{ ...data, index }} />
      ))}
    </Content>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
