import React from 'react'
import styled from 'styled-components'
import error from './error.jpg'
const Container = styled.div`
width:100%;
height:100vh; 
display:flex;
justify-content:center;
align-items:center;

`
const NoPage = styled.div`
width:600px;
height:500px;
box-shadow:2px 2px 5px;
border-radius:10px;
`
const Text = styled.h3`
text-align:center;
`
const Img = styled.img`
width:600px;
height:400px;
`
const NoRoutePage = () => {
  return (
    <Container>
        <NoPage>
            <Text>404 Error , These page does not exist</Text>
            <Img src={error}/>
        </NoPage>
    </Container>
  )
}

export default NoRoutePage