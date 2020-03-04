import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis
        vero, fuga non voluptatem quas quidem facere recusandae magnam iure
        autem eius reprehenderit.
      </p>
      <Link to="/contact">Contact me</Link>
    </Layout>
  )
}

export default About
