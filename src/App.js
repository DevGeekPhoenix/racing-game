import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import "./App.css";
import Background from "./components/Background";
import TextSection from "./components/TextSection";

function App() {
  return (
    <Wrapper className="App">
      <Background />
      <TextSection />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
`;
