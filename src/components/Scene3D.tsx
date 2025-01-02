import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { HouseModel } from "./HouseModel";
import type { HouseConfig } from "./house/types";

interface Scene3DProps {
    config: HouseConfig;
}

export function Scene3D({ config }: Scene3DProps) {
    return (
        <div className="w-full h-[500px]">
            <Canvas>
                <PerspectiveCamera makeDefault position={[5, 5, 5]} />
                <OrbitControls enableZoom={true} />

                {/* Simple lighting setup instead of Environment */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <hemisphereLight intensity={0.3} groundColor="#8ba349" />

                <HouseModel config={config} />

                {/* Ground plane */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color="#8ba349" />
                </mesh>
            </Canvas>
        </div>
    );
}
