import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";

const FireBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFirePreset(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        preset: "fire",
        background: { color: "#000000" }, // Change background color if needed
      }}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default FireBackground;
