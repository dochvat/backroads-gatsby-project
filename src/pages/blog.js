import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const blog = () => {
  return (
    <Layout>
      Hello from the blog page!<Link to="/">Index page</Link>
    </Layout>
  )
}

export default blog
