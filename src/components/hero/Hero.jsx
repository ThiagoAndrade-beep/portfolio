import React from 'react'
import { FiArrowDownRight } from 'react-icons/fi'
import { FiMail } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";
import './hero.css'
import Buttons from '../ui/buttons/Buttons'
import UseTyped from '../../hooks/UseTyped';

const Hero = () => {
    const typedRef = UseTyped({
        strings: ["Front end Developer", "Back end Developer", "Software Engineer"],
        typeSpeed: 70,
        backSpeed: 50,
    })
  return (
    <main className='hero'>
        <div className='hero-content'>
            <p className='hero-intro'>Olá, eu sou</p>
            <h1 className='hero-title'>Thiago Andrade</h1>
            <h2 className='hero-role' ref={typedRef} />
            <p className='hero-description'>
                 Criando experiências digitais modernas, elegantes e funcionais
                com React, TypeScript e as tecnologias mais recentes.
            </p>
            
            <div className='hero-buttons'>
                <Buttons variant="projects">
                    Ver Projetos <FiArrowDownRight size={18}/>
                </Buttons>
                <Buttons variant="contact">
                    Entrar em Contato <FiMail size={18}/>
                </Buttons>
            </div> 

            <div className='hero-social'>
                <VscGithubAlt className='icons gitHub'/>
                <FiLinkedin className='icons linkedin'/>
            </div>
        </div>
    </main>
  )
}

export default Hero