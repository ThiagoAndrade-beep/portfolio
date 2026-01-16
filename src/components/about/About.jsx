import React from 'react'
import imgFuturista from "../../assets/img-futurista.jpeg"
import './about.css'
import CardsAbout from '../ui/cards-about/CardsAbout'
import Title from '../ui/titles/Title'

const About = () => {
  return (
    <main className='about'>
        <Title title="Sobre" titleSpan="Mim"/>

        <div className='about-content'>
            <div className='profile-card'>
                <img src={imgFuturista} alt="imagem futurista" />
            </div>

        <div className='about-informations'>
            <div className='about-description'>
                <p>Tenho 19 anos, sou desenvolvedor Front-End focado em criar interfaces modernas, performáticas e com atenção real à experiência do usuário.</p>
                
                <p>Curso Análise e Desenvolvimento de Sistemas e atuo profissionalmente na área de <span className='marker-devops'>DevOps</span>, trabalhando com <span className='marker-aws'>AWS</span>, <span className='marker-docker'>Docker</span>, <span className='marker-git'>Git</span>, <span className='marker-terraform'>Terraform</span>, <span className='marker-pipelines'>pipelines</span>, entre outras ferramentas de infraestrutura. Essa experiência me permite enxergar o fluxo completo de uma aplicação em produção, desde o build até o comportamento em ambientes reais, o que fortalece minhas decisões como desenvolvedor e me dá uma visão mais precisa sobre performance, estabilidade e entrega contínua..</p>
                
                <p>Atualmente estou aprofundando meus estudos em <span className='marker-react'>React</span> e <span className='marker-typescript'>TypeScript</span>, com ênfase em arquitetura de componentes, padrões modernos, boas práticas e escalabilidade. Meu objetivo é me consolidar como Desenvolvedor Front-End, entregando soluções estáveis, organizadas e preparadas para crescer junto com o produto.</p>
                
                <p>Nos meus estudos, estou desenvolvendo o Monitoring Products,  um sistema que monitora promoções de produtos da amazon e envia alertas; *código disponível no GitHub.</p>
                
                <p>Busco evoluir continuamente, transformando estudo em prática e prática em maturidade profissional. Meu próximo passo: iniciar minha trajetória como Estagiário ou Desenvolvedor Júnior, contribuindo com projetos reais enquanto avanço no ecossistema front-end moderno.</p>
            </div>

            <div className='about-cards'>
                <CardsAbout title="1+" description="Anos de experiência como DevOps"/>
                <CardsAbout title="2+" description="Anos de estudos de desenvolvimento"/>
                <CardsAbout title="20+" description="Projetos concluídos"/>
            </div>
            
        </div>
    </div>
    </main>
  )
}

export default About