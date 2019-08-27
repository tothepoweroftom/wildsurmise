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
        <h1> What's Important To Us</h1>
      <p>First of all we want to make music and tools to inspire. Music has played a central role in our lives and making music is a natural impulse to pass on the music and insights we've gained.
        This applies not just to the musicians but also the technologists who have inspired the world with their inventions. It is our belief that the two go hand in hand.
      </p>



      </AnimatedBox>
    </Layout>
  )
}

export default About
