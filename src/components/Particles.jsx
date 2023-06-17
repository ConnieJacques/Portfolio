import Particles from "react-particles";
import { loadFull } from "tsparticles";


export function ParticlesComponent() {
const particlesInit = async (main) => {
        await loadFull(main);
}

    return (
        <div className="">
        <Particles
            id="tsparticles"
            init={particlesInit}

            options={{
                "fullScreen": {
                    "enable": false,
                    // "width": 80,
                    // "height": 100
                },
                "background": {
                    "color": "#323233"
                  },
                "particles": {
                    "color": {
                        "value": "#fff"
                    },
                    "move": {
                        "speed": -2,
                        "direction": "bottom",
                        "enable": true,
                        "out_mode": "out",
                    },
                    "number": {
                        "value": 400,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "shape": {
                        // "type": "snow-flake",
                        "type": "circle",
                    },
                    "opacity": {
                        "value": 0.7,
                    },
                    "size": {
                        "value": 10,
                    },
                    "wobble":{
                        "enable":true,
                        "distance":10,
                        "speed":10
                    },
                     "zIndex":{
                        "value":{
                           "min":0,
                           "max":100
                        }
                    },
                    
                },
            }}
        />
        </div>
    )
}