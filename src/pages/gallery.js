import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GalleryPage = () => (
  <Layout>
    <SEO title="" />
    <h1>Gallery page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GalleryPage
