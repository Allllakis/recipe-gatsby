import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
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
      </main>
    </Layout>
  )
}
