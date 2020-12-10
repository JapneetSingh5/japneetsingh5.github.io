/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import twitter from "../assets/twitter.png"
import github from "../assets/github.png"
import devpost from "../assets/devpost.png"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
            devpost
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Hi, I am <strong>{author.name}</strong>, {author.summary}
        {` `}<br />
        <a href={`https://twitter.com/${social.twitter}`}>
          <img src={twitter} width="24" height="20" />
        </a>{` `}
        <a href={`https://github.com/${social.github}`}>
        <img src={github} width="28" height="28" style={{marginBottom: -4}} />
      </a>{` `}
      <a href={`https://devpost.com/${social.devpost}`}>
      <img src={devpost} width="24" height="20" />
    </a>
      </p>
    </div>
  )
}

export default Bio
