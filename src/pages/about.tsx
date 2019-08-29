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

        <h1>About</h1>
        <p>Wild Surmise Music is a micro record label and music technology company based in Amsterdam, Netherlands and Dingle, Ireland. It is helmed by Thomas Power and a rotating team of friends and advisors. 
          Thomas has a twin passion for music and technology. He has been writing music as Wild Surmise and L'Homme Moyen for over 10 years. He has studied Theoretical Physics and Music & Media Technologies in Trinity College Dublin.
          Then in the following years worked as both a media composer and a software developer.
        </p>
        <h1> What's Important To Us</h1>
        <ul style={{listStyleType: "none"}}>
          <li>
            <h4>Inspiration</h4>
            <p>First of all we want to make music and tools to inspire. Music has played a central role in our lives and making music is a natural impulse to pass on the music and insights we've gained.
            This applies not just to the musicians but also the technologists who have inspired the world with their inventions. It is our belief that the two go hand in hand.
          </p>
          </li>
          <li>
            <h4>Pushing Boundaries</h4>
            <p>We want to make tools that aren't just emulations of the past. We don't want to make music that sounds like everybody else. We like trying crazy ideas.</p>
          </li>
          <li>
            <h4>Creativity</h4>
            <p>Both yours and ours. You don't have to spend a fortune to make interesting music. It starts in your head and also depends on how well you understand your tools. As a music technology company we want to make tools that augment your process without breaking the bank.</p>
          </li>
        </ul>





      </AnimatedBox>
    </Layout>
  )
}

export default About
