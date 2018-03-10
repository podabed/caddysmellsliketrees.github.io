import isMobile from "ismobilejs";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

import Footer from "../components/Footer";
import styles from "./lyrics.module.css";

const lyrics = ({ data }) => (
  <div>
    <div className="container">
      <div className="row">
        <div className={isMobile.any ? "col" : "col " + styles.toc}>
          <ul className={isMobile.any ? styles.list : styles.listDesktop}>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <li className={styles.link} key={node.id}>
                <Link to={"/" + node.fields.slug}>
                  {node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

lyrics.propTypes = {
  data: PropTypes.object.isRequired
};

export const lyricsQuery = graphql`
  query lyricsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          id
        }
      }
    }
  }
`;

export default lyrics;
