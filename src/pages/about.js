import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>How to learn to cook?</h2>
            <p>
              Easy-to-make recipes for beginners will help out if you're just
              getting started with homemade recipes.
            </p>
            <p>
              A detailed step-by-step description of the cooking technology will
              help you not only quickly and without any problems prepare the
              dish you like, but also easily master the basics of cooking.
            </p>
            <p>Search for recipes and cook.</p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpg"
            alt="pripering foods"
            className="about-img"
            placeholder="blurred"
            layout="constrained"
            as="div"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look and check how tasty and easy!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
