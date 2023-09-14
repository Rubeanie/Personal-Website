'use client';

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 C:\Users\Ruben\Downloads\RP-Logo.glb -T --shadows
*/

import { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';
import { useColor } from '../lib/themes';

export function RpLogo(props) {
  const [scale, setScale] = useState(Math.min(1, window.screen.width / 600));
  const { nodes, materials } = useGLTF(
    'https://res.cloudinary.com/ruben-p/image/upload/v1692730013/3D%20Models/Logo/RP-Logo.glb'
  );

  const { transparency } = useSpring({
    config: { mass: 10, tension: 150, friction: 50 },
    to: {
      transparency: 1
    },
    from: { transparency: 0 }
  });

  const { y } = useSpring({
    config: { duration: 20000 },
    loop: true,
    from: { y: 0 },
    to: { y: Math.PI * 2 }
  });

  useEffect(() => {
    const updateScale = () => {
      setTimeout(() => {
        setScale(Math.min(1, window.screen.width / 600));
      }, 10);
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    window.addEventListener('orientationchange', updateScale);
    return () => {
      window.removeEventListener('resize', updateScale);
      window.addEventListener('orientationchange', updateScale);
    };
  }, []);

  return (
    <group {...props} dispose={null}>
      {[
        {
          position: [-6, 1, 7],
          color: useColor('--color-secondary'),
          intensity: 110,
          distance: 70
        },
        {
          position: [0, 1, 8],
          color: useColor('--color-primary'),
          intensity: 85,
          distance: 80
        },
        {
          position: [6, 1, 7],
          color: useColor('--color-secondary'),
          intensity: 110,
          distance: 70
        }
      ].map((lightProps, index) => (
        <pointLight key={index} {...lightProps} />
      ))}
      <a.mesh
        geometry={nodes['RP_-_Logo001'].geometry}
        rotation-y={y}
        scale={scale}
        material={materials.Abstract}
        material-transparent
        material-opacity={transparency}
      />
    </group>
  );
}

useGLTF.preload(
  'https://res.cloudinary.com/ruben-p/image/upload/v1692730013/3D%20Models/Logo/RP-Logo.glb'
);
