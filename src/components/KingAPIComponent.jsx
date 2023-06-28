import { Slide } from "react-awesome-reveal";
import apiImage from '../images/PortfolioImages/api-image.png'


export default function KingAPIComponent() {

    return (
        <section className='h-[80dvh] w-[90vw] top-[10dvh]'>
            <div className='h-[80dvh] font-raleway text-base pl-10 sm:pl-12 pr-12 md:pt-16 md:pl-20 xl:pt-16 xl:pl-32 sm:text-6xl md:text-8xl'>
                <div className='flex flex-row'>
                    <Slide duration={2000}>
                        <h2 className='pb-4 xl:pb-6 pt-8 flex uppercase font-bold text-2xl md:text-3xl xl:text-4xl text-saturated-green tracking-[0.2em] xl:tracking-[0.3em]'><p className='hidden md:block first-letter:text-3xl md:first-letter:text-4xl xl:first-letter:text-5xl first-letter:text-dark-green'>Stephen&nbsp;</p><p className='first-letter:text-3xl md:first-letter:text-4xl xl:first-letter:text-5xl first-letter:text-dark-green'>King&nbsp;</p><p className='first-letter:text-3xl md:first-letter:text-4xl xl:first-letter:text-5xl first-letter:text-dark-green'>API</p></h2>
                    </Slide>
                </div>

                <div className='xl:flex'>
                    <figure className='w-[73vw]'>
                        <img src={apiImage} alt='API 200 status responses' className='w-[73vw] xl:w-[35vw] rounded-2xl border-2 border-dark-green' />
                    </figure>

                    <p className='font-raleway w-[75vw] xl:pl-28 pt-8 text-base text-white text-xs md:text-base xl:pt-0'> 
                    The Stephen King API is a webserver API written in Python with the Insomnia development platform.
                    It features MVC Architecture,
                    JSON Web Tokens for authentication and authorisation verification,
                    3NF database normalisation of a PostgreSQL relational database,
                    and uses the Flask-SQLAlchemy ORM tool and psycopg2 database adapter to enable compatibility between PostgresSQL and Python. 
                    <h6 className='font-semibold uppercase text-saturated-green tracking-widest xl:tracking-[0.2rem] w-fit pt-4 sm:pt-8'>GitHub Repository: </h6><a href='https://github.com/ConnieJacques/ConnieJacques_T2A2' className='sm:hidden underline decoration-dark-green underline-offset-2'>github.com/ConnieJacques/ConnieJacques_T2A2</a><a href='https://github.com/ConnieJacques/ConnieJacques_T2A2' className='hidden sm:block underline decoration-dark-green underline-offset-2'>https://github.com/ConnieJacques/ConnieJacques_T2A2</a></p>
                </div>
            </div>
        </section>
    )
}