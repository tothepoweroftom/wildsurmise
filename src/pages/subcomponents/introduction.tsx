import React from 'react'
import { config, useSpring } from 'react-spring'
import { AnimatedBox } from '../../elements'
import styled from 'styled-components'


const Introduction = () => {
    const pageAnimation = useSpring({
      config: config.slow,
      from: { opacity: 0 },
      to: { opacity: 1 },
    })
  
    const StyledDiv = styled.div`
  
    width: 100%;
    text-align: center;
    position:relative;
    top:0px;
    height: 25vh;
    padding: 0px 0px;

  `
  
    return (
      <StyledDiv>
                <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>

        <h2>Welcome to Wild Surmise Music</h2>
        <p style={{padding: '0px 30px'}}>Home of a micro record label and music technology company based out of the wild and wet Atlantic coast of Ireland and the canal lined streets of Amsterdam.</p>
        <p style={{padding: '0px 30px'}}>Our mission is to make music and instruments to inspire!</p>
        </AnimatedBox>
      </StyledDiv> 
    )
}

  
export default Introduction;