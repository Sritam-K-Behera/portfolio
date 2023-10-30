/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Portfolio.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Associate Cloud Engineer",
    description:
      "An Associate Cloud Engineer deploys applications, monitors operations, and manages enterprise solutions..",
    url: "https://www.credential.net/c7ec3a79-68d7-44e2-af84-caf2f20ee6ed#gs.7n4ehp",
  },
  {
    title: "Cloud Digital Leader",
    description:
      "A Cloud Digital Leader can articulate the capabilities of Google Cloud core products and services and how they benefit organizations.",
    url: "https://www.credential.net/8041788c-8063-4560-94da-93a4f470eb1f#gs.7n4hp1",
  },
  {
    title: "Salesforce Associate",
    description:
      "Associates have a fundamental awareness of an integrated CRM platforms.",
    url: "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=tZ84w3UxVE+zTmbGotEdY2JLgPoC2cvOZnM7DomP2aBZ7IOKIkdw8iYWDTsK9bXJ",
  },
  {
    title: "Cloud Practitioner",
    description:
      "Cloud Practitioners demonstrate cloud fluency and foundational AWS knowledge.",
    url: "https://www.credly.com/badges/d27b3169-ff2c-4fbd-8dfa-8dd0eab3803b/public_url",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
