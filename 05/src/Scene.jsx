import React from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import imgTexture from './assets/img.png'

function Scene() {
  const tex = useTexture(imgTexture)

  return (
    <mesh rotation={[0, Math.PI, 0]}>
      <cylinderGeometry args={[8, 8, 3, 128, 1, true]} />
      <meshStandardMaterial
        map={tex}
        side={THREE.BackSide}
        toneMapped={false}
      />
    </mesh>
  )
}

export default Scene
