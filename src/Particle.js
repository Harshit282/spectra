import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Particle() {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const defalt = {
        fullScreen: {
        enable: true,
        zIndex: -1,
        },
        fpsLimit: 120,
        particles: {
        number: {
            value: 80, // 80
            density: {
            enable: true,
            value_area: 800,
            },
        },
        color: {
            value: "#fff", //ff0000
            animation: {
            enable: true,
            speed: 20,
            sync: true,
            },
        },
        opacity: {
            value: 1, //0.5
        },
        size: {
            value: {
            min: 0.1, //0.1
            max: 3, //3
            },
        },
        links: {
            enable: true,
            distance: 100, //100
            color: "#ffffff",
            opacity: 0.4, //0.4
            width: 1,
        },
        move: {
            enable: true,
            speed: 3, //6
            direction: "none",
            outModes: {
            default: "out",
            },
        },
        },
        interactivity: {
        events: {
            onHover: {
            enable: false, //
            mode: "repulse",
            },
            onClick: {
            enable: false,
            mode: "push", //
            },
            resize: true,
        },
        modes: {
            repulse: {
            distance: 50,
            },
            push: {
            quantity: 20,
            },
        },
        },
        detectRetina: true,
        background: {
        color: "#000000",
        },
    }; // normal particles, repulse on hover
    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={defalt} // just change here the object name for different animations
        />
    );
}
