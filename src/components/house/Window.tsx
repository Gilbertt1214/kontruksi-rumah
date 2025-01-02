import { Box } from '@react-three/drei';

interface WindowProps {
  position: [number, number, number];
  color?: string;
  size?: [number, number, number];
}

export function Window({ 
  position,
  color = '#87ceeb',
  size = [0.4, 0.4, 0.1]
}: WindowProps) {
  return (
    <Box args={size} position={position}>
      <meshStandardMaterial color={color} />
    </Box>
  );
}