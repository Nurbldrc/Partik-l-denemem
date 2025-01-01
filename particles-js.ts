/* Partikül Efekt Ayarları */
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80, // Partikül sayısı
            density: { enable: true, value_area: 800 }
        },
        color: { value: "#ffffff" }, // Partikül rengi
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8 },
            repulse: { distance: 200 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});
