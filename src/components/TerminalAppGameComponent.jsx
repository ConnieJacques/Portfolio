import { Slide } from "react-awesome-reveal";
import terminalAppImage from '../images/PortfolioImages/terminal-app-image.png'


export default function TerminalAppGameComponent() {


    return (
        <section className='h-[80dvh] w-[90vw] top-[10dvh]'>
            <div className='h-[80dvh] font-raleway text-base px-12 md:pt-16 md:pl-20 xl:pt-16 xl:pl-32 sm:text-6xl md:text-8xl lg:text-lg lg:py-16 lg:px-24'>
                <div className='flex flex-row'>
                    <Slide duration={2000}>
                        <h2 className='pb-4 xl:pb-6 pt-8 flex uppercase font-bold text-2xl md:text-3xl xl:text-4xl text-saturated-green tracking-[0.2em] xl:tracking-[0.3em]'><p className='first-letter:text-3xl md:first-letter:text-4xl xl:first-letter:text-5xl first-letter:text-dark-green'>Terminal&nbsp;</p><p className='hidden md:block first-letter:text-3xl md:first-letter:text-4xl xl:first-letter:text-5xl first-letter:text-dark-green'>App&nbsp;</p><p className='first-letter:text-3xl md:first-letter:text-4xl xl:first-letter:text-5xl first-letter:text-dark-green'>Game</p></h2>
                    </Slide>
                </div>

                <div className='xl:flex'>
                    <div className='xl:flex'></div>
                    <figure className='w-[73vw]'>
                        <img src={terminalAppImage} alt='API 200 status responses' className='w-[73vw] xl:w-[30vw] rounded-2xl border-2 border-dark-green' />
                    </figure>

                    <p className='font-raleway w-[75vw] xl:pl-28 pt-8 text-base text-white text-xs md:text-base xl:pt-0'> 
                    'The Game' is a command line interface (terminal) application written in Python.
                    It features, single CLI command to install dependencies and load game via a bash script,
                    continuous main menu, exit any time functionality,
                    and read from .txt and .csv files and the ability to save results to a uniquely named text file. 
                    <h6 className='font-semibold uppercase text-saturated-green tracking-widest xl:tracking-[0.2rem] w-fit pt-8'>GitHub Repository: </h6><a href='https://github.com/ConnieJacques/ConnieJacques_T1A3' className='sm:hidden underline decoration-dark-green underline-offset-2'>github.com/ConnieJacques/ConnieJacques_T1A3</a><a href='https://github.com/ConnieJacques/ConnieJacques_T2A2' className='hidden sm:block underline decoration-dark-green underline-offset-2'>https://github.com/ConnieJacques/ConnieJacques_T1A3</a></p>
                </div>
            </div>
        </section>
    )
}