import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
       <SEO title="Home Page" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpg"
            alt="vegetebls"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
          <div className="hero-text">
            <h1>How to learn to cook?</h1>
            <h4>Easy-to-make recipes for beginners</h4>
          </div>
          </div>
        </header>
        <AllRecipes />
      </main>
     
    </Layout>
  )
}
