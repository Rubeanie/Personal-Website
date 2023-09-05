'use client'

import { Suspense, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { extend, createRoot } from '@react-three/fiber';
import { PointLight, Group, Mesh } from 'three';
import { Html, AdaptiveEvents, PerformanceMonitor } from '@react-three/drei';
import useMeasure from 'react-use-measure';
import round from 'lodash/round';
import { RpLogo } from './RpLogo';
import { useColor } from '../lib/themes';

extend({ PointLight, Group, Mesh });


export default function CustomCanvas() {
  const [dpr, setDpr] = useState(0.3);
  const [containerRef, { width, height }] = useMeasure();
  const canvasRef = useRef(null);
  const root = useRef(null);

  useEffect(() => {
    const canvasNode = canvasRef.current;

    // Create a react root targeting the canvas
    if (!root.current) {
      root.current = createRoot(canvasNode)
    }

    console.log(`${width}, ${height}`)
    console.log(root.current)

    // Configure the root, set camera, etc
    root.current.configure({
      gl: {
        precision: 'lowp',
        powerPreference: 'high-performance'
      },
      size: { width: Math.min(width, height * 0.66), height: height },
      dpr: { dpr },
      camera: { position: [0, 0, 3], fov: 60, near: 1.9, far: 3.9 }
    });

    root.current.render(
      <>
        <Suspense
          fallback={
            <Html center className='placeholder'>
              <div
                className='column'
                style={{
                  height: `calc(361.1867px/(841 / ${height}))`,
                  maxHeight: `calc(59.7347vw/(841 / ${height}))`,
                  width: `calc(520px/(841 / ${height}))`,
                  maxWidth: `calc(86vw/(841 / ${height}))`,
                  transition: 'opacity 0.5s',
                  position: 'relative'
                }}>
                <Image
                  src='https://res.cloudinary.com/ruben-p/image/upload/3D%20Models/Logo/Placeholder%20RP-Logo.webp'
                  alt='RP-Logo 3D model placeholder'
                  fill={true}
                  sizes='800px'
                  priority={true}
                />
              </div>
            </Html>
          }>
          {[
            {
              position: [-8, 1, 6],
              color: "#FFFFFF",
              intensity: 110,
              distance: 70
            },
            /*           {
                        position: [0, 1, 8],
                        color: useColor('--color-primary'),
                        intensity: 85,
                        distance: 80
                      }, */
            {
              position: [8, 1, 6],
              color: "#FFFFFF",
              intensity: 110,
              distance: 70
            }
          ].map((lightProps, index) => (
            <pointLight key={index} {...lightProps} />
          ))}
          <RpLogo />
          {/* <PerformanceMonitor
            ms={200}
            iterations={7}
            step={0.05}
            factor={1}
            onChange={({ factor }) => setDpr(round(0.2 + 0.7 * factor, 2))}
          /> */}
          {/* <AdaptiveEvents /> */}
        </Suspense>
      </>
    );

    // Cleanup
    return () => {
    };
  }, [dpr, width, height]);

  return (
    <div ref={containerRef} className='threeJS'>
      <canvas ref={canvasRef} />
    </div>
  );
}