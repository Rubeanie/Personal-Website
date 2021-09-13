/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/crown.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Crown.geometry}
        material={materials['Material.002']}
        scale={[1.35, 1, 1.35]}
      />
    </group>
  )
}

useGLTF.preload('/crown.glb')
