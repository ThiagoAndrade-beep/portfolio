import React, { useRef, useState } from 'react'
import './contact.css'
import Title from '../ui/titles/Title'
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

import emailJs from '@emailjs/browser'


const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mensage, setMensage] = useState("")
    const form = useRef()

    function enviarEmail() {
        emailJs.init({
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        })

        emailJs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current)
            .then((response) => alert("Mensagem enviada com sucesso!"))
            .catch((error) => {
                console.log(error);
                alert("erro")
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        console.log(name, email, mensage)
        enviarEmail()
    }

    return (
        <main className='contact-container' id='contact'>
            <Title title="Entre em" titleSpan="Contato" />
            <p className='text-description'>Tem algum projeto em mente? Vamos conversar!</p>
            <div className='contact-section'>
                <div className='contact-infos'>
                    <div className='contact-info-card'>
                        <div className='info-icon'><FiMail size={23} color='#00C2FF' /></div>
                        <div className='contact-info-card-content'>
                            <h4>Email</h4>
                            <p>thiagopollinho@gmail.com</p>
                        </div>
                    </div>

                    <div className='contact-info-card'>
                        <div className='info-icon'><FiPhone size={23} color='#00C2FF' /></div>
                        <div className='contact-info-card-content'>
                            <h4>Telefone</h4>
                            <p>(75)982334412</p>
                        </div>
                    </div>

                    <div className='contact-info-card'>
                        <div className='info-icon'><FiMapPin size={23} color='#00C2FF' /></div>
                        <div className='contact-info-card-content'>
                            <h4>Localização</h4>
                            <p>Salvador, Bahia</p>
                        </div>
                    </div>

                    <div className='info-card-networks'>
                        <h4>Redes Sociais</h4>
                        <div className='networks-icons'>
                            <div className='icon-network'><a href="https://github.com/ThiagoAndrade-beep/" rel='noopener noreferrer'> <VscGithubAlt size={26} /></a></div>
                            <div className='icon-network'><a href="https://www.linkedin.com/in/thiagoandrade-dev/" rel='noopener noreferrer'><FiLinkedin size={26} /></a> </div>
                            <div className='icon-network'><a href="https://www.instagram.com/thiagoandrade_007/" rel='noopener noreferrer'><FiInstagram size={26} /></a></div>
                        </div>
                    </div>
                </div>
                <div className='contact-form'>
                    <form onSubmit={handleSubmit} ref={form}>
                        <label className='form-content'>
                            <span>Nome</span>
                            <input
                                type="text"
                                placeholder='Seu nome completo'
                                name='nome'
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                                required />
                        </label>
                        <label className='form-content'>
                            <span>Email</span>
                            <input
                                type="text"
                                placeholder='seu@email.com'
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </label>
                        <label className='form-content'>
                            <span>Mensagem</span>
                            <textarea
                                placeholder='Conte-me sobre seu projeto'
                                name='mensagem'
                                value={mensage}
                                onChange={(e) => setMensage(e.target.value)}
                                required>
                            </textarea>
                        </label>
                        <input className='btn-mensage' type='submit' value="Enviar mensagem"/>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Contact