import React from 'react'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { transparentize, readableColor } from 'polished'
import styled from 'styled-components'
import { config, useSpring, animated } from 'react-spring'
import Layout from '../components/layout'
import { Box, AnimatedBox, Button } from '../elements'
import SEO from '../components/SEO'
import YouTube from 'react-youtube';
import SpotifyPlayer from 'react-spotify-player';



const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'


const PBox = styled(AnimatedBox)`
  max-width: 1400px;
  margin: 0 auto;
`

const Content = styled(Box)<{ bg: string }>`
  background-color: ${props => transparentize(0.9, props.bg)};

  .gatsby-image-wrapper:not(:last-child) {
    margin-bottom: ${props => props.theme.space[10]};

    @media (max-width: ${props => props.theme.breakpoints[3]}) {
      margin-bottom: ${props => props.theme.space[8]};
    }
  }
`

const Category = styled(AnimatedBox)`
  letter-spacing: 0.05em;
  font-size: ${props => props.theme.fontSizes[1]};
  text-transform: uppercase;
`

const Description = styled(animated.div)`
  max-width: 960px;
  letter-spacing: -0.003em;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  line-height: 1.58;
`

const PButton = styled(Button)<{ color: string }>`
  background: ${props => (props.color === 'white' ? 'black' : props.color)};
  color: ${props => readableColor(props.color === 'white' ? 'black' : props.color)};
`
const YoutubeVideo = styled.div`

  position: relative;
  overflow: hidden;
  padding: 0px 20vw;


  @media (max-width: ${props => props.theme.breakpoints[3]}) {
    padding: 0px 0px;

  }
`

const Spotify = styled.div`
  margin: 10vw;

`

type PageProps = {
  data: {
    project: {
      title: string
      color: string
      category: string
      desc: string
      slug: string
      type: string
      gumroad: string
      youtube: string
      parent: {
        modifiedTime: string
        birthTime: string
      }
      cover: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
    images: {
      nodes: {
        name: string
        childImageSharp: {
          fluid: {
            aspectRatio: number
            src: string
            srcSet: string
            sizes: string
            base64: string
            tracedSVG: string
            srcWebp: string
            srcSetWebp: string
          }
        }
      }[]
    }
  }
}

const Project: React.FunctionComponent<PageProps> = ({ data: { project, images } }) => {
  const categoryAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })



  const titleAnimation = useSpring({ config: config.slow, delay: 300, from: { opacity: 0 }, to: { opacity: 1 } })
  const descAnimation = useSpring({ config: config.slow, delay: 600, from: { opacity: 0 }, to: { opacity: 1 } })
  const imagesAnimation = useSpring({ config: config.slow, delay: 800, from: { opacity: 0 }, to: { opacity: 1 } })
  console.log(project)
  if(project.type === "film") {
    return (
      <Layout color={project.color}>
      <SEO
        pathname={project.slug}
        title={`${project.title}`}
        desc={project.desc}
        node={project.parent}
        banner={project.cover.childImageSharp.resize.src}
        individual
      />
      <PBox py={10} px={[6, 6, 8, 10]}>
        <Category style={categoryAnimation}>{project.category}</Category>
        <animated.h1 style={titleAnimation}>{project.title}</animated.h1>
        <Description style={descAnimation}>
          <div dangerouslySetInnerHTML={{ __html: project.desc }} />
        </Description>
      </PBox>
      <Content bg={project.color} py={10}>
        {/* <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
          {images.nodes.map(image => (
            <Img alt={image.name} key={image.childImageSharp.fluid.src} fluid={image.childImageSharp.fluid} />
          ))}
        </PBox> */}
      <YoutubeVideo>
      <YouTube
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          border: "0",
          padding: "20%"
        }}
        videoId={project.youtube}
        opts={{
          width: "100%",
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
                  controls: 1,
          rel: 0,
          showinfo: 0
          }}}
      />
      </YoutubeVideo>
      <Spotify>
      <SpotifyPlayer
        uri={project.spotify}
        size={size}
        view={view}
        theme={theme}
      />
      </Spotify>
      </Content>

      
      {/* <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <h2>Buy it here!</h2>
        <a className={"gumroad-button"} href={"https://gum.co/demo"} target={"_blank"}>Buy Macalla Delay VST & AU</a>
      </PBox> */}
    </Layout>
    )
  } else if(project.type === "plugin") {

  return (
    <Layout color={project.color}>
      <SEO
        pathname={project.slug}
        title={`${project.title}`}
        desc={project.desc}
        node={project.parent}
        banner={project.cover.childImageSharp.resize.src}
        individual
      />
      <PBox py={10} px={[6, 6, 8, 10]}>
        <Category style={categoryAnimation}>{project.category}</Category>

        <animated.h1 style={titleAnimation}>{project.title}</animated.h1>
        <div style={{padding: "0px 0px 30px 0px"}}>

        <span>{project.sale} </span><span style={{textDecoration: "line-through", color:"grey"}}>{project.price}</span>
        <br/>
        <a className={"gumroad-button"} href={project.gumroad} target={"_blank"}>Buy {project.title}</a>
        </div>
        <Description style={descAnimation}>
          <div dangerouslySetInnerHTML={{ __html: project.desc }} />
        </Description>
      </PBox>
      <Content bg={project.color} py={10}>
      <YoutubeVideo>
      <YouTube
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          border: "0",
        }}
        videoId={project.youtube}
        opts={{
          width: "100%",
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
                  controls: 0,
          rel: 0,
          showinfo: 0
          }}}
      />
      </YoutubeVideo>
      </Content> 

      
      <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <h3>          Minimum Requirements</h3>
        <ul style={{listStyle: 'none'}}>
          <li>• OSX 10.8 or Windows 10 x64</li>

<li>• Audio Units or VST compatible audio host </li>
        </ul>

      </PBox>
    </Layout>
  )
  } else if(project.type === "music") {

    return (
      <Layout color={project.color}>
        <SEO
          pathname={project.slug}
          title={`${project.title}`}
          desc={project.desc}
          node={project.parent}
          banner={project.cover.childImageSharp.resize.src}
          individual
        />
        <PBox py={10} px={[6, 6, 8, 10]}>
          <Category style={categoryAnimation}>{project.category}</Category>
          <animated.h1 style={titleAnimation}>{project.title}</animated.h1>
          <Description style={descAnimation}>
            <div dangerouslySetInnerHTML={{ __html: project.desc }} />
          </Description>
        </PBox>
        <Content bg={project.color} py={10}>
          <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
            {images.nodes.map(image => (
              <Img alt={image.name} key={image.childImageSharp.fluid.src} fluid={image.childImageSharp.fluid} />
            ))}
          </PBox>
          <Spotify>
      <SpotifyPlayer
        uri={project.spotify}
        size={size}
        view={view}
        theme={theme}
      />
      </Spotify>
        </Content> 
  
        
        {/* <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
          <h2>Buy it here!</h2>
          <a className={"gumroad-button"} href={"https://gum.co/demo"} target={"_blank"}>Buy Macalla Delay VST & AU</a>
        </PBox> */}
      </Layout>
    )
    }
}

export default Project

export const query = graphql`
  query ProjectTemplate($slug: String!, $images: String!) {
    project: projectsYaml(slug: { eq: $slug }) {
      title
      color
      category
      desc
      slug
      type
      gumroad
      youtube
      spotify
      sale
      price
      parent {
        ... on File {
          modifiedTime
          birthTime
        }
      }
      cover {
        childImageSharp {
          resize(width: 1200, height: 675, quality: 80) {
            src
          }
        }
      }
    }
    images: allFile(filter: { relativePath: { regex: $images } }) {
      nodes {
        name
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
