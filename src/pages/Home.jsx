import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";

import { HomeInfo, Loader } from "../components";
import { Bird, Island, Plane, Sky } from "../models";
import { CV } from "../assets/icons";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.7, 0.7, 0.7];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
        style={{ touchAction: "none" }}
        >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[3, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
            scrollPosition={scrollPosition}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
            scrollPosition={scrollPosition}
          />
        </Suspense>
      </Canvas>

      <div className="hand-enimation">
        <div className="blue-gradient_text drop-shadow conte-ani-hand">
          move it
        </div>
        <div className="hand-anii">✋🏻</div>
      </div>

      {/* Download CV Button */}
      <div className="fixed bottom-6 right-6 z-20">
        <style>{`
          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
            }
            50% {
              box-shadow: 0 0 25px rgba(34, 211, 238, 0.8);
            }
          }
          
          @keyframes bounce-arrow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-4px);
            }
          }
          
          .cv-btn {
            animation: pulse-glow 2s ease-in-out infinite;
          }
          
          .cv-btn:hover svg {
            animation: bounce-arrow 0.6s ease-in-out infinite;
          }
        `}</style>
        <a
          href={CV}
          download="Karim Emad CV"
          className="cv-btn inline-flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm rounded-lg shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 ease-out"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          CV
        </a>
      </div>
    </section>
  );
};

export default Home;
