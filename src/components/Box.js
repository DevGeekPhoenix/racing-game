import React from "react";
import { OrbitControls } from "@react-three/drei";

export default function Box() {
  return (
    <mesh rotation={[90, 0, 20]}>
      <ambientLight intensity={0.5} />
      <OrbitControls enableZoom={false} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
}
