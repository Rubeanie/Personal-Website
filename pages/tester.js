import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`
const Heading = styled.h1`
  color: #000000;
  font-size: 10rem;
  font-weight: 900;
  text-align: center;
`
const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Tester() {
  return (
    <>
      <Head>
        <title>Ruben P</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>Model</Heading>
      </Hero>
    </>
  )
}
