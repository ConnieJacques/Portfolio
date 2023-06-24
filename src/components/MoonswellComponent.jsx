import { useState, useEffect } from "react";

import { Slide } from "react-awesome-reveal";

import sunIcon from '../images/Planets/sun.svg'
import moonIcon from '../images/Planets/moon.svg'
import mercuryIcon from '../images/Planets/mercury.svg'
import venusIcon from '../images/Planets/venus.svg'
import marsIcon from '../images/Planets/mars.svg'
import jupiterIcon from '../images/Planets/jupiter.svg'
import saturnIcon from '../images/Planets/saturn.svg'
import uranusIcon from '../images/Planets/uranus.svg'
import neptuneIcon from '../images/Planets/neptune.svg'
import plutoIcon from '../images/Planets/pluto.svg'
import searchIcon from '../images/Planets/search-icon.svg'


export default function MoonswellComponent() {
    const [location, setLocation] = useState({latitude: -33.852222, longitude: 151.210556})

    const [planets, setPlanet] = useState([]);

    function getPlanetaryPositions() {
        const planetsApi =
            'https://api.visibleplanets.dev/v3?latitude=' + location.latitude + '&longitude=' + location.longitude;
        fetch(planetsApi)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.data);
                setPlanet(data.data);
            })
            .catch((error) => {
                console.log("Fetch failed!" + error);
                return null;
            });
    }

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            (success) => {
                const newPosition = {
                    latitude: success.coords.latitude,
                    longitude: success.coords.longitude,
                };
                setLocation(newPosition);
            },
            (error) => console.log(error)
        );

        getPlanetaryPositions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        getPlanetaryPositions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    const [searchLocationName, setSearchLocationName] = useState('')

    const handleInputClick = () => {
        const geoCodingApi = 'https://geocode.maps.co/search?q=' + searchLocationName

        fetch(geoCodingApi)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setLocation({latitude: data[0].lat, longitude: data[0].lon})
            })
            .catch((error) => {
                console.log("Fetch failed!" + error);
                return null;
            });
    }

    const handleInputSubmit = (event) => {
        event.preventDefault();
        handleInputClick();
    }


    return (
        <section className='h-[80dvh] w-[90vw] top-[10dvh]'>
            <div className='font-raleway text-base px-12 xl:pt-16 xl:pl-32 sm:text-6xl md:text-8xl lg:text-lg lg:py-16 lg:px-24'>
                <div className='flex flex-row'>
                    <Slide duration={2000}>
                        <h2 className='pb-6 pt-8 flex uppercase font-bold text-2xl xl:text-4xl text-saturated-green tracking-[0.2em] xl:tracking-[0.3em]'><p className='first-letter:text-3xl xl:first-letter:text-5xl first-letter:text-dark-green'>Moonswell</p></h2>
                    </Slide>
                </div>

                <div className='flex flex-row justify-center pb-2'>
                    <form onSubmit={handleInputSubmit} className="flex flex-row w-full items-center justify-center space-x-4">
                        <input 
                        type='text' 
                        placeholder='search location...' 
                        onChange={event => setSearchLocationName(event.target.value)}
                        className='text-black text-base xl:text-lg bg-saturated-green pl-4 rounded-md focus:outline focus:outline-dark-green focus:outline-2 focus:outline-offset-2 capitalize placeholder:lowercase xl:w-[30dvw]' 
                        />
                        <button type='submit' className='bg-transparent border-none cursor-pointer p-0 m-0'>
                            <div className='text-white cursor-pointer transition ease-out hover:scale-125'><img src={searchIcon} alt='search icon' className="h-6 w-6 mx-auto"/></div>
                        </button>
                    </form>
                </div>

                <h2 className="uppercase tracking-widest xl:tracking-[0.2rem] font-bold text-sm xl:text-lg text-center text-white">Currently Visible in the Sky:</h2>
                {/* Mobile View */}
                <ul className="text-center sm:hidden">
                    {planets &&
                        planets.map((planet) => (
                            <li key={planet.name} className="m-2 text-center text-xs text-white inline-block sm:text-center">
                                {planet.name === 'Sun' ? <img src={sunIcon} alt='sun icon' className="h-6 w-6 mx-auto"/> : null}
                                {planet.name === 'Moon' ? <img src={moonIcon} alt='moon icon' className="h-6 w-6 mx-auto"/> : null}
                                {planet.name === 'Mercury' ? <img src={mercuryIcon} alt='mercury icon' className="h-6 w-6 mx-auto"/> : null}
                                {planet.name === 'Venus' ? <img src={venusIcon} alt='venus icon' className="h-5 w-5 mx-auto"/> : null}
                                {planet.name === 'Mars' ? <img src={marsIcon} alt='mars icon' className="h-5 w-5 mx-auto"/> : null}
                                {planet.name === 'Jupiter' ? <img src={jupiterIcon} alt='jupiter icon' className="h-6 w-6 mx-auto"/> : null}
                                {planet.name === 'Saturn' ? <img src={saturnIcon} alt='saturn icon' className="h-6 w-6 mx-auto"/> : null}
                                {planet.name === 'Uranus' ? <img src={uranusIcon} alt='uranus icon' className="h-6 w-6 mx-auto"/> : null}
                                {planet.name === 'Neptune' ? <img src={neptuneIcon} alt='neptune icon' className="h-6 w-6 mx-auto"/> : null}
                                {planet.name === 'Pluto' ? <img src={plutoIcon} alt='pluto icon' className="h-6 w-6 mx-auto"/> : null}
                                <p>{planet.name}</p></li>
                        ))}
                </ul>

                {/* Larger than phone */}
                <ul className="text-center hidden sm:block">
                    {planets &&
                        planets.map((planet) => (
                            <li key={planet.name} className="m-2 text-center text-xs text-white inline-block sm:text-center">
                                {planet.name === 'Sun' ? <img src={sunIcon} alt='sun icon' className="h-6 w-6 mx-auto"/> : null}
                                {planet.name === 'Moon' ? <img src={moonIcon} alt='moon icon' className="h-6 w-6 mx-auto"/> : null}
                                {planet.name === 'Mercury' ? <img src={mercuryIcon} alt='mercury icon' className="h-6 w-6 mx-auto"/> : null}
                                {planet.name === 'Venus' ? <img src={venusIcon} alt='venus icon' className="h-6 w-6 mx-auto"/> : null}
                                {planet.name === 'Mars' ? <img src={marsIcon} alt='mars icon' className="h-6 w-6 mx-auto"/> : null}
                                {planet.name === 'Jupiter' ? <img src={jupiterIcon} alt='jupiter icon' className="h-6 w-6 mx-auto"/> : null}
                                {planet.name === 'Saturn' ? <img src={saturnIcon} alt='saturn icon' className="h-6 w-6 mx-auto"/> : null}
                                {planet.name === 'Uranus' ? <img src={uranusIcon} alt='uranus icon' className="h-6 w-6 mx-auto"/> : null}
                                {planet.name === 'Neptune' ? <img src={neptuneIcon} alt='neptune icon' className="h-6 w-6 mx-auto"/> : null}
                                {planet.name === 'Pluto' ? <img src={plutoIcon} alt='pluto icon' className="h-6 w-6 mx-auto"/> : null}
                                <p>{planet.name}</p><p>Constellation: {planet.constellation}</p>{planet.nakedEyeObject ? <p>Telescope: No</p> : <p>Telescope: Yes</p>}</li>
                        ))}
                </ul>

                <p className='font-raleway w-[75vw] text-base text-white text-xs xl:text-sm xl:pt-2'>Created as a collaborative hackathon project, 
                this single page application built in React displays news, weather, tidal and lunar event data. 
                It features a custom web scraper to obtain public tidal data from BOM website, 
                demonstrates understanding of modern functional components and hooks,
                was styled with Tailwind CSS, 
                and uses Netlify functions to secure API secret keys.
                <h6 className='font-semibold uppercase tracking-widest w-fit pt-2'>GitHub Repository: </h6><a href='https://github.com/reactronauts/untitled-tide-app' className='underline decoration-dark-green underline-offset-2'>https://github.com/reactronauts/untitled-tide-app</a><br />
                <h6 className='font-semibold uppercase tracking-widest w-fit pt-2'>Deployed Site: </h6><a href='https://moonswell.netlify.app/' className='underline decoration-dark-green underline-offset-2'>https://moonswell.netlify.app/</a></p>
            </div>
        </section>
    )
}