import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { useCursor, MeshReflectorMaterial, Image, Text, Environment, OrbitControls } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing } from 'maath'
import getUuid from 'uuid-by-string'
import { div } from 'three/src/nodes/TSL.js'
import ScrollDownIndicator from '../../components/scrollDownIndicator/ScrollDownIndicator';

const GOLDENRATIO = 1.61803398875



const isMobile = window.innerWidth < 768; // Detect mobile screens

const images = [
  // Front (Bottom Layer)
  { position: isMobile ? [] : [-2.4, 0, -2], rotation: [0, 0, 0], url: '/gallery/c2.webp' },
  { position: isMobile ? [] : [2.4, 0, -2], rotation: [0, 0, 0], url: '/gallery/c1.webp' },
  // Front (Top Layer)
  { position: isMobile ? [] : [-2.4, 1.7, -2], rotation: [0, 0, 0], url: '/gallery/c3.webp' },
  { position: isMobile ? [] : [2.4, 1.7, -2], rotation: [0, 0, 0], url: '/gallery/c4.webp' },

  // Back (Bottom Layer)
  { position: isMobile ? [-1.1, 0, -6] : [-1.2, 0, -2], rotation: [0, 0, 0], url: '/gallery/d1.webp' },
  { position: isMobile ? [0, 0, -6] : [0, 0, -2], rotation: [0, 0, 0], url: '/gallery/c5.webp' },
  { position: isMobile ? [1.1, 0, -6] : [1.2, 0, -2], rotation: [0, 0, 0], url: '/gallery/c7.webp' },
  // Back (Top Layer)
  { position: isMobile ? [-1.1, 1.9, -6] : [-1.2, 1.7, -2], rotation: [0, 0, 0], url: '/gallery/c9.webp' },
  { position: isMobile ? [-0, 1.9, -6] : [0, 1.7, -2], rotation: [0, 0, 0], url: '/gallery/c6.webp' },
  { position: isMobile ? [1.1, 1.9, -6] : [1.2, 1.7, -2], rotation: [0, 0, 0], url: '/gallery/d2.webp' },

  // Left (Bottom Layer)
  { position: isMobile ? [-1.9, 0, -5.5] : [-2.8, 0, -0.5], rotation: [0, Math.PI / 2, 0], url: '/gallery/f1.webp' },
  { position: isMobile ? [-2, 0, -4.5] : [-2.8, 0, 0.5], rotation: [0, Math.PI / 2, 0], url: '/gallery/d3.webp' },
  { position: isMobile ? [-2.1, 0, -3.5] : [-2.8, 0, 1.5], rotation: [0, Math.PI / 2, 0], url: '/gallery/j1.webp' },
  { position: isMobile ? [-2.2, 0, -2.5] : [-2.8, 0, 2.5], rotation: [0, Math.PI / 2, 0], url: '/gallery/f3.webp' },
  // Left (Top Layer)
  { position: isMobile ? [-1.9, 2, -5.5] : [-2.8, 1.7, -0.5], rotation: [0, Math.PI / 2, 0], url: '/gallery/n1.webp' },
  { position: isMobile ? [-2, 2, -4.5] : [-2.8, 1.7, 0.5], rotation: [0, Math.PI / 2, 0], url: '/gallery/p3.webp' },
  { position: isMobile ? [-2.1, 2, -3.5] : [-2.8, 1.7, 1.5], rotation: [0, Math.PI / 2, 0], url: '/gallery/r1.webp' },
  { position: isMobile ? [-2.2, 2, -2.5] : [-2.8, 1.7, 2.5], rotation: [0, Math.PI / 2, 0], url: '/gallery/p6.webp' },

  // Right (Bottom Layer)
  { position: isMobile ? [1.9, 0, -5.5] : [2.8, 0, -0.5], rotation: [0, -Math.PI / 2, 0], url: '/gallery/m1.webp' },
  { position: isMobile ? [2, 0, -4.5] : [2.8, 0, 0.5], rotation: [0, -Math.PI / 2, 0], url: '/gallery/p2.webp' },
  { position: isMobile ? [2.1, 0, -3.5] : [2.8, 0, 1.5], rotation: [0, -Math.PI / 2, 0], url: '/gallery/p5.webp' },
  { position: isMobile ? [2.2, 0, -2.5] : [2.8, 0, 2.5], rotation: [0, -Math.PI / 2, 0], url: '/gallery/n2.webp' },
  // Right (Top Layer)
  { position: isMobile ? [1.9, 2, -5.5] : [2.8, 1.7, -0.5], rotation: [0, -Math.PI / 2, 0], url: '/gallery/p1.webp' },
  { position: isMobile ? [2, 2, -4.5] : [2.8, 1.7, 0.5], rotation: [0, -Math.PI / 2, 0], url: '/gallery/p4.webp' },
  { position: isMobile ? [2.1, 2, -3.5] : [2.8, 1.7, 1.5], rotation: [0, -Math.PI / 2, 0], url: '/gallery/p7.webp' },
  { position: isMobile ? [2.2, 2, -2.5] : [2.8, 1.7, 2.5], rotation: [0, -Math.PI / 2, 0], url: '/gallery/f2.webp' }
];



const Gallery = () => (

  <div className="relative min-h-screen text-white">

    {/* Full-Screen Image Section */}
    <div className=" relative w-full h-screen">
      <img
        src="/pageHeading/Gallery.png"
        alt="Itinerary Heading"
        className="w-full h-full object-contain"
      />
      <ScrollDownIndicator />
    </div>


    <Canvas style={{ width: "100%", height: "100vh" }} dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 3, 15] }}>
      {/* <color attach="background" args={['#191920']} />
      <fog attach="fog" args={['#191920', 0, 15]} /> */}

      
      {/* Added Cyan Gallery Text in the Center */}
      {/* <Text
        fontSize={0.8}
        color="cyan"
        position={[0, 3, 0]}
        anchorX="center"
        anchorY="middle"
        strokeColor="cyan" // Shadow color
        strokeWidth={0.5} // Thickness of the shadow

      >
        GALLERY
      </Text> */}

      <group position={[0, -0.5, 0]}>
        <Frames images={images} />
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={0.5}
          />
        </mesh>
      </group>
      <Environment preset="city" />
    </Canvas>


  </div>
)





function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const ref = useRef()
  const clicked = useRef()
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
      clicked.current.parent.getWorldQuaternion(q)
    } else {
      p.set(0, 1, 5.5)
      q.identity()
    }
  })
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt)
    easing.dampQ(state.camera.quaternion, q, 0.4, dt)
  })
  return (
    <group
      ref={ref}
      onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
      onPointerMissed={() => setLocation('/')}>
      {images.map((props) => <Frame key={props.url} {...props} /> /* prettier-ignore */)}
    </group>
  )
}

function Frame({ url, c = new THREE.Color(), ...props }) {
  const image = useRef()
  const frame = useRef()
  const [, params] = useRoute('/item/:id')
  const [hovered, hover] = useState(false)
  const [rnd] = useState(() => Math.random())
  const name = getUuid(url)
  const isActive = params?.id === name
  useCursor(hovered)
  useFrame((state, dt) => {
    // image.current.material.zoom = 1.5 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
    // const targetScale = isActive ? [1, 1, 1] : [1, 1, 1];
    // easing.damp3(image.current.scale, targetScale, 0.1, dt);
    easing.damp3(image.current.scale, [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt)
    easing.dampC(frame.current.material.color, hovered ? 'cyan' : 'white', 0.01, dt)
  })

  // useFrame((state, dt) => {
  //   // Define the scale when the image is active (zoom out more)
  //   const activeScale = [1.25, 1, 1]; // Adjust the scale values as needed

  //   // Define the default scale when hovered or inactive
  //   const defaultScale = [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1];

  //   // Apply smooth transition to the scale
  //   easing.damp3(image.current.scale, isActive ? activeScale : defaultScale, 0.1, dt);

  //   // Keep frame color change on hover
  //   easing.dampC(frame.current.material.color, hovered ? 'white' : 'white', 0.01, dt);
  // });
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1.1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
      </mesh>
      {/* <Text maxWidth={0.1} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.025}>
        {name.split('-').join(' ')}
      </Text> */}
    </group>
  )
}


export default Gallery;



