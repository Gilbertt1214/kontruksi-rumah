import { Box } from "@react-three/drei";

interface DoorProps {
    color: string;
    position?: [number, number, number];
    size?: [number, number, number];
}

export function Door({
    color = "#4a3728",
    position = [0, 0.4, 1.05],
    size = [0.4, 0.8, 0.1],
}: DoorProps) {
    return (
        <Box args={size} position={position}>
            <meshStandardMaterial color={color} />
        </Box>
    );
}
