import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import styled from "styled-components";
import "./App.css";
import Background from "./components/Background";
import TextSection from "./components/TextSection";
import AnimatedSphere from "./components/AnimatedSphere";
import Supra from "./components/Supra";
import Box from "./components/Box";

function App() {
  return (
    <Wrapper className="App">
      <Background />
      <TextSection />
      <Canvas className="canvas">
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Supra />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    width: 100%;
    height: 100px;
  }
`;
