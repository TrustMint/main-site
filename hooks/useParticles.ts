import { useEffect } from 'react';

declare global {
  interface Window {
    particlesJS: (id: string, config: any) => void;
  }
}

export const useParticles = () => {
  useEffect(() => {
    if (window.matchMedia('(min-width: 769px)').matches && window.particlesJS) {
      window.particlesJS("particles-js", {
        "particles": {
          "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
          "color": { "value": "#ffffff" },
          "shape": { "type": "circle" },
          "opacity": { "value": 0.5, "random": true },
          "size": { "value": 2, "random": true },
          "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.1, "width": 1 },
          "move": { "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
          "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.3 } }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
      });
    }
  }, []);
};
