import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/layout'
import GridItem from '../components/grid-item'
import SEO from '../components/SEO'
import { ChildImageSharp } from '../types'

type PageProps = {
  data: {
    projects: {
      nodes: {
        title: string
        slug: string
        type: string
        cover: ChildImageSharp
      }[]
    }
  }
}

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-auto-rows: 25vw;

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
    grid-auto-rows: 60vw;
  }
`

const Title = styled.div`
  padding: 20px;
`

const Projects: React.FunctionComponent<PageProps> = ({ data: { projects } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout color="#fff">
      <SEO title="Projects | Wild Surmise Music" />
      <Title>
      <h1>Plugins</h1>
      </Title>
      <Area style={pageAnimation}>
        {projects.nodes.map(project => {
          return project.type === "plugin" ?
          <GridItem key={project.slug} to={project.slug} aria-label={`View project "${project.title}"`}>
          <Img fluid={project.cover.childImageSharp.fluid} />
          <span>{project.title}</span>
          <span style={{}}>{project.title}</span>

        </GridItem> : null

      
          
        })}
      </Area>
    </Layout>
  )

}

export default Projects

export const query = graphql`
  query Projects {
    projects: allProjectsYaml {
      nodes {
        title
        slug
        type
        cover {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
