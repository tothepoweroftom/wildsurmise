import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'
import Layout from '../components/layout'
import GridItem from '../components/grid-item'
import SEO from '../components/SEO'
import { ChildImageSharp } from '../types'
import Header from '../components/header'
import HeaderVideo from '../components/header-video'
import Introduction from './subcomponents/introduction'

type PageProps = {
  data: {
    firstProject: {
      title: string
      slug: string
      cover: ChildImageSharp
    }
    fourProjects: {
      nodes: {
        title: string
        slug: string
        cover: ChildImageSharp
        overlay: string
      }[]
    }
    aboutUs: ChildImageSharp
    instagram: ChildImageSharp
  }
}

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 35vw 40vw 25vw;
  grid-template-areas:
    'four-projects four-projects four-projects';

  @media (max-width: ${props => props.theme.breakpoints[3]}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 35vw 30vw 30vw 25vw;

    grid-template-areas:
      'four-projects four-projects four-projects four-projects'
      'four-projects four-projects four-projects four-projects'
  }

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 38vw);

    grid-template-areas:
      'four-projects four-projects'
      'four-projects four-projects'
      'four-projects four-projects'
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 50vw);

    grid-template-areas:
      'four-projects'
      'four-projects'
      'four-projects'
      'four-projects'

  }
`

const FirstProject = styled(GridItem)`
  grid-area: first-project;
`

const AboutUs = styled(GridItem)`
  grid-area: about-us;
`

const FourProjects = styled.div`
  grid-area: four-projects;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`
const Youtube = styled.div`

  width: 100%;
  text-align: center;
  position: relative;


  @media (max-width: ${props => props.theme.breakpoints[1]}) {
  }
`
const Latest = styled.div`

  width: 100%;
  text-align: center;
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints[1]}) {

  }
`


const Instagram = styled(GridItem)`
  grid-area: instagram;
`


const Index: React.FunctionComponent<PageProps> = ({ data: { firstProject, fourProjects, aboutUs, instagram } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO />

      <Introduction>
      </Introduction>
      {/* <Youtube id="youtube">
        <HeaderVideo>
        </HeaderVideo>
      </Youtube> */}

      <Latest>
        <h2>Latest Work</h2>
      </Latest>

      <Area>
       <FourProjects>
          {fourProjects.nodes.map(project => (
            <GridItem to={project.slug} key={project.slug} aria-label={`View project "${project.title}"`}>
              <Img fluid={project.cover.childImageSharp.fluid} />
              <span style={{color: project.overlay}}>{project.title}</span>
              <span style={{fontWeight: '200', color: project.overlay, marginTop: '35px'}}>{project.subtitle}</span>

            </GridItem>
          ))}
        </FourProjects> 
        </Area>

    </Layout>
  )
}

export default Index

export const query = graphql`
  query Index {
    firstProject: projectsYaml {
      title
      slug
      cover {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    fourProjects: allProjectsYaml(limit: 4) {
      nodes {
        title
        subtitle
        slug
        overlay
        cover {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    aboutUs: file(sourceInstanceName: { eq: "images" }, name: { eq: "about-us" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    instagram: file(sourceInstanceName: { eq: "images" }, name: { eq: "instagram" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
