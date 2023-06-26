// import { ParticlesComponent } from "./Particles";

import { ParticlesComponent } from "./Particles";



export function Background() {
    return (
        <div>
            <div className="border-r-2 h-[80dvh] w-[90vw] md:w-[96vw] xl:w-[97vw] -z-2 absolute border-saturated-green"></div>
            <div className="border-r-2 h-[80dvh] w-[94vw] xl:w-[98vw] -z-3 absolute border-saturated-green"></div>
            <div className="border-b-2 h-[74.5dvh] w-[100vw] md:h-[75.5dvh] xl:h-[75dvh] -z-4 absolute border-saturated-green"></div>
            <div className="border-b-2 h-[77dvh] w-[100vw] xl:w-[100vw] -z-5 absolute border-saturated-green"></div>
            <div className="tsparticles">
                <ParticlesComponent />
            </div>
        </div>
    )
} 