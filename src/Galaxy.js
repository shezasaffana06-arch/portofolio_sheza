import Particles from "react-tsparticles";

export default function Galaxy() {
  return (
    <Particles
      options={{
        fullScreen: { enable: false },

        background: {
          color: "transparent",
        },

        particles: {
          number: {
            value: 100,
          },

          color: {
            value: ["#22d3ee", "#a855f7", "#ffffff"],
          },

          size: {
            value: { min: 1, max: 3 },
          },

          opacity: {
            value: 0.7,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.3,
            },
          },

          move: {
            enable: true,
            speed: 0.6,
          },

          links: {
            enable: true,
            color: "#22d3ee",
            distance: 120,
            opacity: 0.3,
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}