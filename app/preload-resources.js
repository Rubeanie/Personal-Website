'use client'

import { preload, preconnect } from 'react-dom'

export function PreloadResources() {
  preload('https://www.gstatic.com/draco/versioned/decoders/1.5.5/draco_wasm_wrapper.js', { as: 'script' })
  preload('https://www.gstatic.com/draco/versioned/decoders/1.5.5/draco_decoder.wasm', { as: 'fetch' })
  preconnect('https://api.sanity.com', { crossOrigin: 'anonymous' })
  preconnect('https://cdn.sanity.io', { crossOrigin: 'anonymous' })
  preconnect('https://res.cloudinary.com', { crossOrigin: 'anonymous' })
  preconnect('https://www.gstatic.com', { crossOrigin: 'anonymous' })

  return null
}