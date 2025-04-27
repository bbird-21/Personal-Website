import React, { useRef } from 'react'
import GeometryParticles from "./GeometryParticles";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax"; // Commented out as not used in the provided snippet
import FixedHeader from './components/FixedHeader';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import './App.css';
// import land from './assets/land.png'; // Commented out as not used
gsap.registerPlugin(TextPlugin)

const Scene = () => {
  const container = useRef(null);

  useGSAP(() => {
    const words = gsap.utils.toArray(".text-writter");

    if (words.length === 0) {
      console.warn("GSAP: No elements found with class '.main-content'");
      return
    }

    const tl = gsap.timeline({ delay: 6.5 });
    const timePerCharacter = 0.1;

    words.forEach((el) => {
      const textContent = el.textContent || ""
      if (!textContent) return

      const duration = textContent.length * timePerCharacter;


      tl.from(el, {
        text: "",
        duration: duration,
        ease: "none",
      });
    });

  }, [])


  return (
    <>
      <FixedHeader />

      {/* Parallax commented out as it wasn't closed properly and content was outside */}
      {/* <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          factor={4}
          speed={1}> */}

        <div className="container"> {/* Removed ref={container} if not scoping */}
          <div className="particles-background">
            <Canvas camera={{ position: [2.0, 2.0, 2.0] }}>
              <ambientLight intensity={0.5} />
              <GeometryParticles count={1200} />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>

          <div className="title title--style">
            Hey there
          </div>

          <div className="main-content main-content--style">
            Passionate <span className='text-writter'>Software Engineer</span>
          </div>


        </div>

        <div className='test'></div>

      {/* </ParallaxLayer>
      </Parallax> */}
    </>
  );
};

export default Scene;
