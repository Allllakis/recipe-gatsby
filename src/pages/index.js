import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
       <SEO title="Home Page" description="This is home page"/>
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
            <h1>Food and Recipes</h1>
            <h4>structured recipes and healthy food</h4>
          </div>
          </div>
        </header>
        <AllRecipes />
      </main>
     
    </Layout>
  )
}
