import React from 'react'
import './contact.css'
import Title from '../ui/titles/Title'
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";


const Contact = () => {
    return (
        <main className='contact-container' id='contact'>
            <Title title="Entre em" titleSpan="Contato"/>
            <p className='text-description'>Tem algum projeto em mente? Vamos conversar!</p>
            <div className='contact-section'>
                <div className='contact-infos'>
                    <div className='contact-info-card'>
                        <div className='info-icon'><FiMail size={23} color='#00C2FF'/></div>
                        <div className='contact-info-card-content'>
                            <h4>Email</h4>
                            <p>thiagopollinho@gmail.com</p>
                        </div>
                    </div>

                     <div className='contact-info-card'>
                        <div className='info-icon'><FiPhone size={23} color='#00C2FF'/></div>
                        <div className='contact-info-card-content'>
                            <h4>Telefone</h4>
                            <p>(75)982334412</p>
                        </div>
                    </div>

                     <div className='contact-info-card'>
                        <div className='info-icon'><FiMapPin size={23} color='#00C2FF'/></div>
                        <div className='contact-info-card-content'>
                            <h4>Localização</h4>
                            <p>Salvador, Bahia</p>
                        </div>
                    </div>

                    <div className='info-card-networks'>
                        <h4>Redes Sociais</h4>
                        <div className='networks-icons'>
                            <div className='icon-network'><a href="https://github.com/ThiagoAndrade-beep/" rel='noopener noreferrer'> <VscGithubAlt size={26}/></a></div>
                            <div className='icon-network'><a href="https://www.linkedin.com/in/thiagoandrade-dev/" rel='noopener noreferrer'><FiLinkedin size={26}/></a> </div>
                            <div className='icon-network'><a href="https://www.instagram.com/thiagoandrade_007/" rel='noopener noreferrer'><FiInstagram size={26}/></a></div>
                        </div>
                    </div>
                </div>
                <div className='contact-form'>
                    <form>
                        <label className='form-content'>
                            <span>Nome</span>
                            <input type="text" placeholder='Seu nome completo' />
                        </label>
                        <label className='form-content'>
                            <span>Email</span>
                            <input type="text" placeholder='seu@email.com' />
                        </label>
                        <label className='form-content'>
                            <span>Mensagem</span>
                            <textarea placeholder='Conte-me sobre seu projeto'></textarea>
                        </label>
                        <button className='btn-mensage'>
                            Enviar mensagem
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Contact