import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from './Scene'
import './style.css'

function App() {
  return (
    <div className="canvas-container">
<Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
  <ambientLight intensity={1} />
  <pointLight position={[0, 5, 0]} intensity={3} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />

        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
