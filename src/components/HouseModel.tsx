import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Base } from './house/Base';
import { Roof } from './house/Roof';
import { Door } from './house/Door';
import { Window } from './house/Window';
import type { HouseConfig } from './house/types';

const DEFAULT_WINDOWS = [
  { position: [-0.5, 1, 1.05] },
  { position: [0.5, 1, 1.05] }
];

interface HouseModelProps {
  config: HouseConfig;
}

export function HouseModel({ config }: HouseModelProps) {
  const houseRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (houseRef.current) {
      houseRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  const windows = config.windows || DEFAULT_WINDOWS;

  return (
    <group ref={houseRef}>
      <Base color={config.baseColor} />
      <Roof color={config.roofColor} />
      <Door color={config.doorColor} />
      
      {windows.map((window, index) => (
        <Window
          key={index}
          position={window.position}
          color={config.windowColor}
          size={window.size}
        />
      ))}
    </group>
  );
}