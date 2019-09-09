import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const Music = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="Music | Wild Surmise Music" desc="Wild Surmise Music is a micro record label in Ireland and the Netherlands" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1> Music</h1>
          <p>Wild Surmise Music is a small record label home to the artists Wild Surmise and L'Homme Moyen</p>



      </AnimatedBox>
    </Layout>
  )
}

export default Music
