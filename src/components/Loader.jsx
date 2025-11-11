import { Html } from "@react-three/drei";

const Loader = () => {
  return (
  <Html center>
      <div className="flex flex-col items-center justify-center gap-6 p-8 min-w-[300px]">
        {/* Logo or Icon Area */}
        <div className="relative">
          {/* Rotating Circles */}
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-4 border-blue-400/30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-transparent border-b-cyan-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
          </div>
        </div>
        {/* Loading Steps (Optional) */}
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;