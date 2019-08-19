import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Wild Surmise" desc="Welcome to Wild Surmise Music home of music and technology." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1> About Us</h1>
      <p>Wild Surmise Music is a small record label and music technology company based in The Netherlands and Ireland.</p>



      </AnimatedBox>
    </Layout>
  )
}

export default About
