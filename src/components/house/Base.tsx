import { Box } from "@react-three/drei";
import { canvas } from "motion/react-client";

interface BaseProps {
    color: string;
    position?: [number, number, number];
    size?: [number, number, number];
}

export function Base({
    color,
    position = [0, 0.75, 0],
    size = [2, 1.5, 2],
    
}: BaseProps) {
    return (
        <Box args={size} position={position}>
            <meshStandardMaterial color={color} />
        </Box>
    );
}

