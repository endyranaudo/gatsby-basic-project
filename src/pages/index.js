import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <h2>Hi people</h2>
    <p>My name is Endy.</p>
    <p>
      Need a developer? <Link to="/contact/">Contact me</Link>
    </p>
  </Layout>
)

export default IndexPage
