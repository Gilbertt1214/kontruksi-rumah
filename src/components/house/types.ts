export interface HouseConfig {
  baseColor: string;
  roofColor: string;
  doorColor: string;
  windowColor: string;
  windows: Array<{
    position: [number, number, number];
    size?: [number, number, number];
  }>;
}