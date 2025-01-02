import { Cone } from "@react-three/drei";
import { rotate } from "three/examples/jsm/nodes/Nodes.js";

interface RoofProps {
    color: string;
    position?: [number, number, number];
    size?: [number, number, number];
    rotatation?: [number, number, number];
}

export function Roof({
    color,
    position = [0, 2, 0],
    size = [1.7, 1, 4],
    rotatation = [0,4,0],

}: RoofProps) {
    return (
        <mesh position={position}>
            <mesh rotation={rotatation}> 
            <coneGeometry args={size} />
            <meshStandardMaterial color={color} />
            </mesh>
        </mesh>
    );
}
