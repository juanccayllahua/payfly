// src/ParticlesBackground.js
import React from 'react';
import Particles from 'react-tsparticles'; // Importamos la librería

const ParticlesBackground = () => {
    const particlesOptions = {
        particles: {
            number: {
                value: 80, // Número de partículas
                density: {
                    enable: true,
                    value_area: 800, // Área de la densidad
                },
            },
            shape: {
                type: 'circle', // Forma de las partículas
            },
            opacity: {
                value: 0.5, // Opacidad de las partículas
                random: true,
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                },
            },
            size: {
                value: 5, // Tamaño de las partículas
                random: true,
            },
            links: {
                enable: true,
                distance: 150, // Distancia entre partículas conectadas
                color: '#ffffff', // Color de las líneas que conectan las partículas
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2, // Velocidad de las partículas
                direction: 'none',
                random: true,
                straight: false,
                outMode: 'out', // Hace que las partículas desaparezcan al salir de la pantalla
            },
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse', // Repele las partículas cuando el mouse pasa cerca
                },
                onclick: {
                    enable: true,
                    mode: 'push', // Añade partículas al hacer clic
                },
            },
        },
    };

    return (
        <div style={{ width:'1000px',height:'1000px',background:'black',position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <Particles options={particlesOptions} />
        </div>
    );
};

export default ParticlesBackground;
