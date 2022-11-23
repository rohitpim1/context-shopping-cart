import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width:100%;
height:100vh; 
display:flex;
justify-content:center;
align-items:center;

`
const NoPage = styled.div`
width:600px;
height:auto;
box-shadow:2px 2px 5px;
border-radius:10px;
`
const Text = styled.h3`
text-align:center;
`
const About = () => {
  return (
    <Container>
        <NoPage>
            <Text> React Shopping cart, technology used React js, context api, reducers,useState
              <br></br> and styled-components
              </Text>
            
        </NoPage>
    </Container>
  )
}

export default About