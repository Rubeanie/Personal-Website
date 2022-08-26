import React from 'react'
import styled, { css } from 'styled-components'

import './skin.css?raw'

const Logo = ({ projectName }) => {
  return (
    <Icon isLogin={projectName}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="16.3"
        viewBox="0 3.85 24 16.3"
      >
        <path d="m1.39 7.77 3.84 5.22-5.18 6.77c-.12.16 0 .39.19.39h3.19c.07 0 .15-.03.19-.09l5.4-7.06-4.62-6.22h6.8v13.12c0 .13.11.24.24.24h2.48c.13 0 .24-.11.24-.24v-16.05h-12.77zm13.86-3.92v2.93h5.73l-4.35 5.83c-.12.16 0 .38.19.38h3.13c.08 0 .15-.04.19-.1l3.85-5.13v-3.91z" />
      </svg>
    </Icon>
  );
}

const Icon = styled.div`
  display: block;
  width: auto;
  height: 2em;
  max-width: 100%;
  margin: -0.75rem auto;
  color: white;

  ${props =>
    props.isLogin &&
    css`
      display: block;
      margin: 0 auto;
      height: 4rem;
      color: black;
    `}

  svg {
    display: block;
    margin: 0 auto;
    height: 100% !important;
    width: auto;
    fill: currentColor;
  }
`

export default Logo
