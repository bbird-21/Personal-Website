import GeometryParticles from "./GeometryParticles";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import './App.css';
import land from './assets/land.png';


const Scene = () => {
  return (
    <>

    <Parallax pages={4}>
      <ParallaxLayer
        offset={0}
        factor={4}
        speed={1}>

      <div className="container">
        <div className="particles-background">
          <Canvas camera={{ position: [2.0, 2.0, 2.0] }}>
            <ambientLight intensity={0.5} />
            <GeometryParticles count={1200} />
            <OrbitControls enableZoom={false}/>
          </Canvas>
          </div>
        </div>
      </ParallaxLayer>

      {/* <ParallaxLayer
          offset={0.9}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer> */}

    </Parallax>

      {/* </div> */}

    </>
  );
};

export default Scene;
