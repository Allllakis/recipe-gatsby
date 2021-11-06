import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Nutrient Data and Diet Tagging for Recipes</h2>
            <p>Search for food by keyword, food name or UPC/Barcode</p>
            <p>
              Sourcing of nutrition facts for a given food, including: macro and
              micro nutrients, allergen labels, lifestyle and health labels
            </p>
            <p>Search for food by given nutrient quantity for 28 nutrients</p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpg"
            alt="pripering foods"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
