particlesJS("particles-js", {
  particles: {
    number: { value: 100 },
    color: { value: "#ffffff" },
    opacity: { value: 0.5 },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    events: { resize: false },
  },
  retina_detect: true,
});
