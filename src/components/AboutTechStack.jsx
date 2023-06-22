import { Slide } from "react-awesome-reveal";
import bash from '../images/TechIcons/bash-icon.png'
import python from '../images/TechIcons/python-icon.svg'
import javascript from '../images/TechIcons/javascript-icon.svg'
import HTML from '../images/TechIcons/html-icon.png'
import SQL from '../images/TechIcons/sql-icon.png'
import NoSQL from '../images/TechIcons/nosql-icon.png'
import markdown from '../images/TechIcons/markdown-icon.png'
import yml from '../images/TechIcons/yml-icon.png'
import flask from '../images/TechIcons/flask-icon.svg'
import express from '../images/TechIcons/express-icon.svg'
import jest from '../images/TechIcons/jest-icon.png'
import pytest from '../images/TechIcons/pytest-icon.png'
import postgresql from '../images/TechIcons/postgresql-icon.png'
import mongodb from '../images/TechIcons/mongo-icon.png'
import css from '../images/TechIcons/css-icon.png'
import sass from '../images/TechIcons/sass-icon.svg'
import tailwind from '../images/TechIcons/tailwind-icon.svg'
import vscode from '../images/TechIcons/vscode-icon.svg'
import node from '../images/TechIcons/node-icon.svg'
import macos from '../images/TechIcons/macos-icon.svg'
import react from '../images/TechIcons/react-icon.svg'
import git from '../images/TechIcons/git-icon.svg'
import mongoose from '../images/TechIcons/mongoose-icon.png'
import sqlalchemy from '../images/TechIcons/sqlalchemy-icon.png'


export function TechComponent() {
    

    return (
        <section className='h-[80dvh] w-[90vw] top-[10dvh]'>
        <div className='font-raleway text-base px-12 xl:pt-16 xl:pl-32 sm:text-6xl md:text-8xl lg:text-lg lg:py-16 lg:px-24'>
            <div className='flex flex-row'>
                <Slide duration={2000}>
                    <h2 className='pb-6 pt-8 flex uppercase font-bold text-2xl xl:text-4xl text-saturated-green tracking-[0.2em] xl:tracking-[0.3em]'><p className='first-letter:text-3xl xl:first-letter:text-5xl first-letter:text-dark-green'>Tech</p></h2>
                </Slide>
            </div>
            <div className='flex flex-row flex-wrap justify-between w-[70dvw] xl:w-[80dvw] text-xs'>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={python} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>Python</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={javascript} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>JavaScript</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={HTML} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>HTML</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={bash} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>Bash</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={SQL} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>SQL</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={NoSQL} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>NoSQL</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={yml} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>yml</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={markdown} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>Markdown</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={jest} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>Jest</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={flask} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>Flask</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={express} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>Express</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={macos} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>MacOS</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={pytest} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>Pytest</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={postgresql} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>PostgreSQL</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={git} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>Git</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={node} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>Node.js</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={vscode} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>VS Code</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={react} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>React</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={css} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>CSS</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={sass} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>SASS</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={tailwind} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>Tailwind CSS</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={mongodb} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>MongoDB</figcaption>
                </figure>                
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={mongoose} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>Mongoose</figcaption>
                </figure>
                <figure className='flex flex-col items-center px-2 xl:py-4 xl:px-8'>
                    <img src={sqlalchemy} alt="GitHub Icon" className="h-8 w-8 md:mr-3"/>
                    <figcaption className='uppercase tracking-[0.2em] text-dark-green font-bold'>SQLAlchemy</figcaption>
                </figure>
            </div>
        </div> 
    </section>
    )
}