import React from "react"
import { Link } from "gatsby"

// Importando componentes
import { Jumbo } from "../components/index";

import { Layout, SEO } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbo />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/Thanks/">Go to Thanks</Link>
    <br />
    <Link to="/Cancel/">Go to Cancel</Link>
  </Layout>
)

export default IndexPage;