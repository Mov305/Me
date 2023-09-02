'use client';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';

export default function ParticlesComponent() {
  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        fpsLimit: 50,
        particles: {
          color: {
            // value: '#e68e2e',
            value: ['#fdf3ff', '#0c6bd5', '#00c1c7'],
          },
          links: {
            color: '#f5f5f5',
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: ['circle', 'polygon', 'square']
          },
          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
        },
        background: {
          color: {
            value: '',
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: false,
              mode: 'repulse',
            },
            onClick: {
              enable: false,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 10,
            },
            repulse: {
              distance: 20,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
